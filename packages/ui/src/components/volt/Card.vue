<template>
    <Card
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Card>
</template>

<script setup lang="ts">
import Card, { type CardPassThroughOptions, type CardProps } from 'primevue/card';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ CardProps {}
defineProps<Props>();

const theme = ref<CardPassThroughOptions>({
    root: {
        class: [
            // Layout
            'flex flex-col',
            'overflow-hidden rounded-lg',
            
            // Background & Shadow
            'bg-surface-0 shadow-sm',
            'dark:bg-surface-800/50 dark:shadow-none',
            
            // Dark mode borders (using surface-white/10 equivalent)
            'dark:outline dark:-outline-offset-1 dark:outline-surface-700/50'
        ]
    },
    body: {
        class: [
            'flex flex-col p-0',
            // This applies lines between Caption, Content, and Footer
            'divide-y divide-surface-200 dark:divide-surface-700'
        ]
    },
    caption: {
        class: 'flex flex-col gap-2 px-4 py-5 sm:px-6'
    },
    title: {
        class: 'text-lg font-medium leading-6 text-surface-900 dark:text-surface-0'
    },
    subtitle: {
        class: 'text-sm text-surface-500 dark:text-surface-400'
    },
    content: {
        class: 'px-4 py-5 sm:p-6 text-surface-700 dark:text-surface-300'
    },
    footer: {
        class: 'px-4 py-4 sm:px-6'
    }
});
</script>