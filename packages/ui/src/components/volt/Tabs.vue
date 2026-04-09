<template>
    <Tabs
        :value="props.value"
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Tabs>
</template>

<script setup lang="ts">
import Tabs, { type TabsPassThroughOptions, type TabsProps } from 'primevue/tabs';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TabsProps {}
const props = defineProps<Props>();

const theme = ref<TabsPassThroughOptions>({
    root: 'flex flex-col',
    tablist: {
        root: 'relative flex',
        content: 'flex flex-1 border-b border-surface-200 dark:border-white/10 space-x-8',
        nav: 'flex flex-1'
    },
    tab: ({ context }: any) => ({
        class: [
            // Alignment & Spacing
            'relative flex items-center justify-center',
            'px-1 py-4 -mb-px',
            'text-sm font-medium whitespace-nowrap cursor-pointer select-none',
            'border-b-2 transition-all duration-200',

            // Colors and Active State
            context.active
                ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                : 'border-transparent text-surface-500 hover:border-surface-300 hover:text-surface-700 dark:text-surface-400 dark:hover:border-white/20 dark:hover:text-surface-200',
            
            // Focus States
            'focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
        ]
    }),
    tabpanels: 'py-4',
    tabpanel: 'outline-none'
});
</script>