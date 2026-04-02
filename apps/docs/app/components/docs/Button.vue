<script setup lang="ts">
// Define the variants
import {NuxtLink} from "#components";

const variantStyles = {
    primary:
        'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-surface-900 hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
    secondary:
        'rounded-full bg-surface-800 py-2 px-4 text-sm font-medium text-white hover:bg-surface-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-surface-400',
}

interface Props {
    variant?: keyof typeof variantStyles
    href?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
})

// Determine the component type based on the presence of 'href'
const componentType = computed(() => (props.href ? NuxtLink : 'button'))

// Merge styles: variants + any custom classes passed via 'class'
const attrs = useAttrs()
const className = computed(() => [
    variantStyles[props.variant],
    attrs.class
])
</script>

<template>
    <component
        :is="componentType"
        :to="href"
        class="cursor-pointer select-none transition-colors"
        :class="className"
        v-bind="$attrs"
    >
        <slot />
    </component>
</template>