<script setup lang="ts">

interface Props {
    title?: string
    nodes?: Array<Node>
}

const props = defineProps<Props>()

// Reactive TOC generation based on the passed Markdoc nodes
const tableOfContents = computed(() =>
    props.nodes ? collectSections(props.nodes) : []
)
</script>

<template>
    <div class="flex">
        <div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
            <article>
                <DocsHeader :title="title" />

                <Prose>
                    <slot />
                </Prose>
            </article>

            <DocsPrevNextLinks />
        </div>

        <TableOfContents :table-of-contents="tableOfContents" />
    </div>
</template>