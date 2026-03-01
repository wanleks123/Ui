import fs from 'fs'
import path from 'path'
import Markdoc from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import glob from 'fast-glob'

const slugify = slugifyWithCounter()

function toString(node: any): string {
    let str = node.type === 'text' && typeof node.attributes?.content === 'string'
        ? node.attributes.content
        : ''
    if ('children' in node) {
        for (let child of node.children) {
            str += toString(child)
        }
    }
    return str
}

function extractSections(node: any, sections: any[], isRoot = true) {
    if (isRoot) slugify.reset()

    if (node.type === 'heading' || node.type === 'paragraph') {
        let content = toString(node).trim()
        if (node.type === 'heading' && node.attributes.level <= 2) {
            let hash = node.attributes?.id ?? slugify(content)
            sections.push([content, hash, []])
        } else if (sections.length > 0) {
            sections.at(-1)[2].push(content)
        }
    } else if ('children' in node) {
        for (let child of node.children) {
            extractSections(child, sections, false)
        }
    }
}

export default defineEventHandler(async () => {
    // Nuxt Content directory
    const contentDir = path.resolve('./content')
    const files = await glob('**/*.md', { cwd: contentDir })

    return files.map((file) => {
        // Format URL: /docs/installation.md -> /docs/installation
        const url = '/' + file.replace(/\.md$/, '').replace(/\/index$/, '')
        const md = fs.readFileSync(path.join(contentDir, file), 'utf8')

        const ast = Markdoc.parse(md)
        const title = ast.attributes?.frontmatter?.match(/^title:\s*(.*?)\s*$/m)?.[1]

        const sections: any[] = [[title || 'Untitled', null, []]]
        extractSections(ast, sections)

        return { url, sections }
    })
})