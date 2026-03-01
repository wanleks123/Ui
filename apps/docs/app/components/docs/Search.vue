<script setup lang="ts">
import {
    createAutocomplete,
    type AutocompleteSource,
} from '@algolia/autocomplete-core'
import {
    Dialog, DialogPanel,
    TransitionRoot, TransitionChild
} from '@headlessui/vue'

// Nuxt Auto-imports: useRouter, useRoute, useId, ref, watch, onMounted, onUnmounted, navigation
const router = useRouter()
const route = useRoute()
const id = useId()

// Use our Nuxt-native search composable
const { search, initIndex } = useSearch()

const isOpen = ref(false)
const modifierKey = ref('')
const autocompleteState = ref<any>({
    collections: [],
    isOpen: false,
    query: '',
    status: 'idle',
})

// Initialize the search index only when the modal opens
watch(isOpen, (open) => {
    if (open) initIndex()
})

const autocomplete = createAutocomplete({
    id,
    placeholder: 'Find something...',
    defaultActiveItemId: 0,
    onStateChange({ state }) {
        autocompleteState.value = state
    },
    shouldPanelOpen({ state }) {
        return state.query !== ''
    },
    navigator: {
        navigate({ itemUrl }) {
            if (itemUrl) {
                router.push(itemUrl)
                close()
            }
        },
    },
    getSources({ query }) {
        // 2. Explicitly type the array as AutocompleteSource<SearchResult>[]
        return [
            {
                sourceId: 'documentation',
                getItems() {
                    return search(query, { limit: 5 })
                },
                // 3. Ensure this returns a string (not unknown)
                getItemUrl({ item }) {
                    return item.url
                },
                onSelect({ itemUrl }) {
                    if (itemUrl) {
                        router.push(itemUrl)
                        close()
                    }
                },
            } as AutocompleteSource<SearchResult>, // 4. Cast the object to the Source type
        ]
    },
})

// --- Event Handlers ---
const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        isOpen.value = true
    }
}

const close = () => {
    isOpen.value = false
    autocomplete.setQuery('')
}

// Close when route changes
watch(() => route.fullPath, () => {
    close()
})

onMounted(() => {
    modifierKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})

// Helper to find hierarchy labels using the auto-imported 'navigation' util
function getHierarchy(result: any) {
    const sectionTitle = navigation.find((section) =>
        section.links.find((link) => link.href === result.url.split('#')[0])
    )?.title
    return [sectionTitle, result.pageTitle].filter(Boolean)
}
</script>

<template>
    <div>
        <button
            type="button"
            class="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pr-3.5 md:pl-4 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-white/5 dark:md:ring-inset dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500"
            @click="isOpen = true"
        >
            <Icon name="ph:magnifying-glass" class="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400 dark:fill-slate-500" />
            <span class="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">Search docs</span>
            <kbd v-if="modifierKey" class="ml-auto hidden font-medium text-slate-400 md:block dark:text-slate-500">
                <kbd class="font-sans">{{ modifierKey }}</kbd>
                <kbd class="font-sans">K</kbd>
            </kbd>
        </button>

        <TransitionRoot :show="isOpen" as="template">
            <Dialog @close="close" class="fixed inset-0 z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                        <DialogPanel class="mx-auto transform-gpu overflow-hidden rounded-xl bg-white shadow-xl sm:max-w-xl dark:bg-slate-800 dark:ring-1 dark:ring-slate-700">
                            <div v-bind="autocomplete.getRootProps({})">
                                <form v-bind="autocomplete.getFormProps({ inputElement: null })">
                                    <div class="group relative flex h-12">
                                        <Icon name="ph:magnifying-glass" class="pointer-events-none absolute top-0 left-4 h-full w-5 fill-slate-400 dark:fill-slate-500" />
                                        <input
                                            class="flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-none placeholder:text-slate-400 focus:w-full focus:flex-none sm:text-sm dark:text-white"
                                            v-bind="autocomplete.getInputProps({ inputElement: null })"
                                            @keydown.esc="close"
                                        />
                                        <div v-if="autocompleteState.status === 'stalled'" class="absolute inset-y-0 right-3 flex items-center">
                                            <Icon name="ph:circle-notch" class="h-6 w-6 animate-spin text-slate-400 dark:text-slate-500" />
                                        </div>
                                    </div>

                                    <div v-if="autocompleteState.isOpen" class="border-t border-slate-200 bg-white px-2 py-3 dark:border-slate-400/10 dark:bg-slate-800">
                                        <div v-if="autocompleteState.collections[0]?.items.length === 0" class="px-4 py-8 text-center text-sm text-slate-700 dark:text-slate-400">
                                            No results for "{{ autocompleteState.query }}"
                                        </div>

                                        <ul v-else v-bind="autocomplete.getListProps()">
                                            <li
                                                v-for="result in autocompleteState.collections[0]?.items"
                                                :key="result.url"
                                                class="group block cursor-default rounded-lg px-3 py-2 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700/30"
                                                v-bind="autocomplete.getItemProps({ item: result, source: autocompleteState.collections[0].source })"
                                            >
                                                <div class="text-sm text-slate-700 group-aria-selected:text-sky-600 dark:text-slate-300 dark:group-aria-selected:text-sky-400">
                                                    <HighlightQuery :text="result.title" :query="autocompleteState.query" />
                                                </div>
                                                <div class="mt-0.5 truncate text-xs whitespace-nowrap text-slate-500 dark:text-slate-400">
                                                    <template v-for="(item, idx) in getHierarchy(result)" :key="idx">
                                                        <HighlightQuery :text="item" :query="autocompleteState.query" />
                                                        <span v-if="idx < getHierarchy(result).length - 1" class="mx-2 text-slate-300 dark:text-slate-700">/</span>
                                                    </template>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>