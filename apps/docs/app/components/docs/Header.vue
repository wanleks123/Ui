<script setup lang="ts">
interface Props {
    title?: string
}

const props = defineProps<Props>()
const route = useRoute()

// Compute the current section based on the active path
const section = computed(() => {
    return navigation.find((section: { links: any[]; }) =>
        section.links.find((link) => link.href === route.path)
    )
})

// Component visibility check
const shouldRender = computed(() => props.title || section.value)
</script>

<template>
    <header v-if="shouldRender" class="mb-9 space-y-1">
        <p
            v-if="section"
            class="font-display text-sm font-medium text-sky-500"
        >
            {{ section.title }}
        </p>

        <h1
            v-if="title"
            class="font-display text-3xl tracking-tight text-slate-900 dark:text-white"
        >
            {{ title }}
        </h1>
    </header>
</template>