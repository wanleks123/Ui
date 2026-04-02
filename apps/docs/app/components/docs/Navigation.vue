<script setup lang="ts">
// 'navigation' is auto-imported from utils/navigation.ts
const route = useRoute()

defineProps<{
    className?: string
}>()

// Define emits to handle the mobile menu closing logic from the previous step
defineEmits<{
    (e: 'link-click', event: MouseEvent): void
}>()
</script>

<template>
    <nav :class="['text-base lg:text-sm', className]">
        <ul role="list" class="space-y-9">
            <li v-for="section in navigation" :key="section.title">
                <h2 class="font-display font-medium text-surface-900 dark:text-white">
                    {{ section.title }}
                </h2>
                <ul
                    role="list"
                    class="mt-2 space-y-2 border-l-2 border-surface-100 lg:mt-4 lg:space-y-4 lg:border-surface-200 dark:border-surface-800"
                >
                    <li v-for="link in section.links" :key="link.href" class="relative">
                        <NuxtLink
                            :to="link.href"
                            @click="$emit('link-click', $event)"
                            :class="[
                'block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                link.href === route.path
                  ? 'font-semibold text-sky-500 before:bg-sky-500'
                  : 'text-surface-500 before:hidden before:bg-surface-300 hover:text-surface-600 hover:before:block dark:text-surface-400 dark:before:bg-surface-700 dark:hover:text-surface-300'
              ]"
                        >
                            {{ link.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>