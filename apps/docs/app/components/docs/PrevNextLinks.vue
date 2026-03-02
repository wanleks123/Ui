<script setup lang="ts">
const route = useRoute()

// We flatten the navigation array to easily find the neighbors of the current path
const allLinks = computed(() => navigation.flatMap((section) => section.links))

const linkIndex = computed(() =>
    allLinks.value.findIndex((link) => link.href === route.path)
)

const previousPage = computed(() =>
    linkIndex.value > 0 ? allLinks.value[linkIndex.value - 1] : null
)

const nextPage = computed(() =>
    linkIndex.value > -1 && linkIndex.value < allLinks.value.length - 1
        ? allLinks.value[linkIndex.value + 1]
        : null
)
</script>

<template>
    <dl
        v-if="previousPage || nextPage"
        class="mt-12 flex border-t border-surface-200 pt-6 dark:border-surface-800"
    >
        <div v-if="previousPage">
            <dt class="font-display text-sm font-medium text-surface-900 dark:text-white">
                Previous
            </dt>
            <dd class="mt-1">
                <NuxtLink
                    :to="previousPage.href"
                    class="flex flex-row-reverse items-center gap-x-1 text-base font-semibold text-surface-500 hover:text-surface-600 dark:text-surface-400 dark:hover:text-surface-300"
                >
                    {{ previousPage.title }}
                    <Icon name="ph:arrow-left" class="h-4 w-4 flex-none fill-current" />
                </NuxtLink>
            </dd>
        </div>

        <div v-if="nextPage" class="ml-auto text-right">
            <dt class="font-display text-sm font-medium text-surface-900 dark:text-white">
                Next
            </dt>
            <dd class="mt-1">
                <NuxtLink
                    :to="nextPage.href"
                    class="flex items-center gap-x-1 text-base font-semibold text-surface-500 hover:text-surface-600 dark:text-surface-400 dark:hover:text-surface-300"
                >
                    {{ nextPage.title }}
                    <Icon name="ph:arrow-right" class="h-4 w-4 flex-none fill-current" />
                </NuxtLink>
            </dd>
        </div>
    </dl>
</template>