<script setup lang="ts">
interface Props {
    as?: string | Object // changed Component to Object/string to avoid type issues
}

const props = withDefaults(defineProps<Props>(), {
    as: 'div',
})

// Use useAttrs to capture any classes or attributes passed from the parent
const attrs = useAttrs()

const proseClasses = [
    'prose max-w-none prose-slate dark:text-surface-400 dark:prose-dark',
    // headings
    'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-34 dark:prose-headings:text-surface-200',
    // lead
    'prose-lead:text-surface-500 dark:prose-lead:text-surface-400',
    // pre
    'prose-pre:rounded-xl',
    // hr
    'dark:prose-hr:border-surface-800',
    'prose-table:my-0!',
    // Merge with any custom classes passed to the component
    attrs.class
]
</script>

<template>
    <component
        :is="as"
        :class="proseClasses"
        v-bind="$attrs"
    >
        <slot />
    </component>
</template>