<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined,
        required: false
    }
})

const attrs = useAttrs()

const proseClasses = [
    'font-semibold dark:text-sky-400 no-underline',
    'transition-all duration-200',

    // Variable Defaults
    'dark:[--tw-prose-background:var(--color-surface-900)]',

    // Light Mode Underline (Complex Shadow)
    'shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size)+2px))_0_0_var(--tw-prose-underline,var(--color-sky-300))]',

    // Dark Mode Underline
    'dark:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,var(--color-sky-800))]',

    // Hover Effects
    'hover:[--tw-prose-underline-size:4px]',
    'dark:hover:[--tw-prose-underline-size:4px]',
    // Merge with any custom classes passed to the component
    attrs.class
]
</script>

<template>
    <NuxtLink
        :href="href"
        :target="target"
        :class="proseClasses"
    >
        <slot/>
    </NuxtLink>
</template>