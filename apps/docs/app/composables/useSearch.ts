import FlexSearch from 'flexsearch'
import {
    type BaseItem
} from '@algolia/autocomplete-core'

interface SearchResult extends BaseItem {
    url: string
    title: string
    pageTitle?: string
}

export const useSearch = () => {
    const sectionIndex = ref<any>(null)
    const isReady = ref(false)

    // Initialize the index
    const initIndex = async () => {
        if (sectionIndex.value) return

        // 1. Fetch the generated data from our server API
        const data = await $fetch('/api/search-data')

        // 2. Initialize FlexSearch
        const index = new FlexSearch.Document({
            tokenize: 'full',
            document: {
                id: 'url',
                index: 'content',
                store: ['title', 'pageTitle'],
            },
            context: {
                resolution: 9,
                depth: 2,
                bidirectional: true
            }
        })

        // 3. Populate index
        for (const { url, sections } of data as any[]) {
            for (const [title, hash, content] of sections) {
                index.add({
                    url: url + (hash ? '#' + hash : ''),
                    title,
                    content: [title, ...content].join('\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                })
            }
        }

        sectionIndex.value = index
        isReady.value = true
    }

    const search = (query: string, options = {}) => {
        if (!sectionIndex.value) return []

        const result = sectionIndex.value.search(query, {
            ...options,
            enrich: true,
        })

        if (result.length === 0) return []

        return result[0].result.map((item: any) => ({
            url: item.id,
            title: item.doc.title,
            pageTitle: item.doc.pageTitle,
        }))
    }

    return {
        initIndex,
        search,
        isReady
    }
}