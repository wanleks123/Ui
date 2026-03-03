<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
    <h4
        :id="id"
        class="relative mt-8 mb-3 scroll-mt-[calc(48px+45px+var(--header-height,64px))] lg:scroll-mt-[calc(48px+var(--header-height,64px))]"
    >
        <a
            v-if="id"
            :href="`#${id}`"
            class="group lg:ps-2 lg:-ms-2 leading-none focus-visible:outline-sky-500 text-lg font-display text-slate-900 dark:text-white no-underline"
        >
            <span
                class="absolute -ms-8 top-0.5 hidden lg:flex items-center justify-center p-1 rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-surface-100 dark:bg-surface-800 text-slate-400"
            >
                <Icon name="ph:hash" class="h-3.5 w-3.5 shrink-0" aria-hidden="true"/>
            </span>

            <slot/>
        </a>
        <slot v-else/>
    </h4>
</template>