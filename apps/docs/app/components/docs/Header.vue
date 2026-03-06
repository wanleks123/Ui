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
                class="inline-flex items-center gap-x-0.5 rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                Badge
                <span class="group relative -mr-1 size-3.5 rounded-xs hover:bg-gray-500/30">
                    <span class="sr-only">Remove</span>
                    <svg viewBox="0 0 14 14" class="size-3.5 stroke-gray-400 group-hover:stroke-gray-300">
                        <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span class="absolute -inset-1"></span>
                </span>
            </NuxtLink>
            <NuxtLink
                v-for="link in docLinks || []"
                :key="link.href"
                :to="link.href"
                class="flex items-center gap-2 text-sm font-medium text-surface-500 hover:text-surface-700 dark:text-surface-400 dark:hover:text-surface-300"
                :target="link.external ? '_blank' : '_self'"
            >
                <span>
                    {{ link.title }}
                </span>
                <Icon
                    v-if="link.external"
                    name="ph:arrow-square-out"
                    class="h-3 w-3 shrink-0"
                />
            </NuxtLink>
        </div>
    </header>
</template>