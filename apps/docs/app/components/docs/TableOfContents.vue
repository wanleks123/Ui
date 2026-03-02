<script setup lang="ts">
// Explicitly import the types we defined in utils/sections.ts
import type { Section, Subsection } from '@/utils/sections'

const props = defineProps<{
    tableOfContents: Section[]
}>()

const route = useRoute()
const currentSection = ref(props.tableOfContents[0]?.id)
let headings: { id: string; top: number }[] = []

// Logic to calculate the top offset of each heading
function updateHeadings() {
    headings = props.tableOfContents
        .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
        .map((id) => {
            const el = document.getElementById(id)
            if (!el) return null

            const style = window.getComputedStyle(el)
            const scrollMt = parseFloat(style.scrollMarginTop) || 0

            // Calculate absolute top position minus scroll-margin-top
            const top = window.scrollY + el.getBoundingClientRect().top - scrollMt
            return { id, top }
        })
        .filter((x): x is { id: string; top: number } => x !== null)
}

function onScroll() {
    if (headings.length === 0) return

    const top = window.scrollY
    let current = headings[0]?.id

    for (const heading of headings) {
        if (top >= heading.top - 10) {
            current = heading.id
        } else {
            break
        }
    }
    currentSection.value = current
}

// Handle lifecycle
onMounted(() => {
    updateHeadings()
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

// Re-calculate if content changes or we navigate
watch(() => props.tableOfContents, async () => {
    await nextTick()
    updateHeadings()
    onScroll()
}, { deep: true })

// Helper to check if a section or any of its children are active
function isActive(section: Section | Subsection): boolean {
    if (section.id === currentSection.value) return true

    // Use optional chaining and .some for a cleaner recursive check
    return 'children' in section && (section.children?.some(child => isActive(child)) ?? false)
}
</script>

<template>
    <div class="hidden xl:sticky xl:top-19 xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" class="w-56">
            <div v-if="tableOfContents.length > 0">
                <h2
                    id="on-this-page-title"
                    class="font-display text-sm font-medium text-surface-900 dark:text-white"
                >
                    On this page
                </h2>
                <ol role="list" class="mt-4 space-y-3 text-sm">
                    <li v-for="section in tableOfContents" :key="section.id">
                        <h3>
                            <NuxtLink
                                :to="`#${section.id}`"
                                :class="[
                  'transition-colors duration-200',
                  isActive(section)
                    ? 'text-sky-500'
                    : 'font-normal text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300'
                ]"
                            >
                                {{ section.title }}
                            </NuxtLink>
                        </h3>

                        <ol
                            v-if="section.children.length > 0"
                            role="list"
                            class="mt-2 space-y-3 pl-5 text-surface-500 dark:text-surface-400"
                        >
                            <li v-for="subSection in section.children" :key="subSection.id">
                                <NuxtLink
                                    :to="`#${subSection.id}`"
                                    :class="[
                    'transition-colors duration-200',
                    isActive(subSection)
                      ? 'text-sky-500'
                      : 'hover:text-surface-600 dark:hover:text-surface-300'
                  ]"
                                >
                                    {{ subSection.title }}
                                </NuxtLink>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </nav>
    </div>
</template>