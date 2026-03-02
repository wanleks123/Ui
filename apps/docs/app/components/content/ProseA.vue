<script setup>
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined
    }
})
</script>

<template>
    <NuxtLink :to="href" :target="target">
        <slot />
    </NuxtLink>
</template>