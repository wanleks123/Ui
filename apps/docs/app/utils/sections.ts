import { type Node } from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'

interface HeadingNode extends Node {
    type: 'heading'
    attributes: {
        level: 1 | 2 | 3 | 4 | 5 | 6
        id?: string
        [key: string]: unknown
    }
}

type H2Node = HeadingNode & { attributes: { level: 2 } }
type H3Node = HeadingNode & { attributes: { level: 3 } }

// --- Type Guards ---
function isHeadingNode(node: Node): node is HeadingNode {
    return (
        node.type === 'heading' &&
        [1, 2, 3, 4, 5, 6].includes(node.attributes.level) &&
        (typeof node.attributes.id === 'string' || typeof node.attributes.id === 'undefined')
    )
}

function isH2Node(node: Node): node is H2Node {
    return isHeadingNode(node) && node.attributes.level === 2
}

function isH3Node(node: Node): node is H3Node {
    return isHeadingNode(node) && node.attributes.level === 3
}

// --- Helpers ---
function getNodeText(node: Node): string {
    let text = ''
    for (let child of node.children ?? []) {
        if (child.type === 'text') {
            text += child.attributes.content
        }
        text += getNodeText(child)
    }
    return text
}

export type Subsection = H3Node['attributes'] & {
    id: string
    title: string
}

export type Section = H2Node['attributes'] & {
    id: string
    title: string
    children: Array<Subsection>
}

// --- Main Function ---
export function collectSections(
    nodes: Array<Node>,
    slugify = slugifyWithCounter()
): Array<Section> {
    let sections: Array<Section> = []

    for (let node of nodes) {
        if (isH2Node(node) || isH3Node(node)) {
            let title = getNodeText(node)
            if (title) {
                let id = node.attributes.id || slugify(title)

                if (isH3Node(node)) {
                    // Add subsection to the last H2 section found
                    if (sections.length > 0) {
                        sections[sections.length - 1]?.children.push({
                            ...node.attributes,
                            id,
                            title,
                        })
                    }
                } else {
                    // Add a new H2 section
                    sections.push({
                        ...node.attributes,
                        id,
                        title,
                        children: []
                    })
                }
            }
        }

        // Recursively check children for more headings (e.g. inside a Custom Component/Tag)
        if (node.children) {
            sections.push(...collectSections(node.children, slugify))
        }
    }

    return sections
}