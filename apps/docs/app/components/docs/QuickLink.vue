<script setup lang="ts">
// Assuming your Icon component expects a string or specific icon name type
interface Props {
    title: string
    description: string
    href: string
    icon: string
}

defineProps<Props>()
</script>

<template>
    <div class="group relative rounded-xl border border-surface-200 dark:border-surface-800 transition-colors">
        <div
            class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-colors [background:linear-gradient(var(--quick-links-hover-bg,var(--color-sky-50)),var(--quick-links-hover-bg,var(--color-sky-50)))_padding-box,linear-gradient(to_top,var(--color-indigo-400),var(--color-cyan-400),var(--color-sky-500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:var(--color-surface-800)]"
        />

        <div class="relative overflow-hidden rounded-xl p-6">
            <Icon :name="icon" class="h-8 w-8" />

            <h2 class="mt-4 font-display text-base text-surface-900 dark:text-white">
                <NuxtLink :to="href">
                    <span class="absolute -inset-px rounded-xl" />
                    {{ title }}
                </NuxtLink>
            </h2>

            <p class="mt-1 text-sm text-surface-700 dark:text-surface-400">
                {{ description }}
            </p>
        </div>
    </div>
</template>