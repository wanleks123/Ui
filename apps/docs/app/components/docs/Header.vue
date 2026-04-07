<script setup lang="ts">
interface Props {
    title?: string
    links?: {
        title: string
        href: string
        external?: boolean
    }[]
}

const props = defineProps<Props>()
const route = useRoute()

// Compute the current section based on the active path
const section = computed(() => {
    return navigation.find((section) =>
        section.links.find((link) => link.href === route.path)
    )
})

// Component visibility check
const shouldRender = computed(() => props.title || section.value)

const docLinks = computed(() => {
    // Check if link is external by looking for 'http' at the start of the href
    return props.links?.map(link => ({
        ...link,
        external: link.external || link.href.startsWith('http')
    }))
})
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
            class="font-display text-3xl tracking-tight text-surface-900 dark:text-white"
        >
            {{ title }}
        </h1>

        <div v-if="links" class="flex flex-wrap gap-4">
            <NuxtLink
                v-for="link in docLinks || []"
                :key="link.href"
                :to="link.href"
                :target="link.external ? '_blank' : '_self'"
                class="inline-flex items-center gap-1 rounded-md bg-surface-50 px-2 py-1 text-xs font-medium text-surface-600 inset-ring inset-ring-surface-500/10 dark:bg-surface-400/10 dark:text-surface-400 dark:inset-ring-surface-400/20 opacity-80 hover:opacity-100 transition-opacity">
                {{ link.title }}
                <span class="group relative -me-1 size-3.5">
                    <Icon
                        v-if="link.external"
                        name="ph:arrow-square-out"
                        class="h-3 w-3 shrink-0"
                    />
                </span>
            </NuxtLink>
        </div>
    </header>
</template>