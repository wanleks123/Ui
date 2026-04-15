<template>
    <Accordion
        unstyled
        v-bind="$attrs"
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <slot></slot>
    </Accordion>
</template>

<script setup lang="ts">
import Accordion, { type AccordionPassThroughOptions, type AccordionProps } from 'primevue/accordion';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionProps {}
defineProps<Props>();

const theme = ref<AccordionPassThroughOptions>({
    root: 'flex flex-col w-full divide-y divide-surface-100 overflow-hidden bg-surface-0 shadow-xs outline-1 outline-surface-900/5 sm:rounded-xl dark:divide-white/5 dark:bg-surface-800/50'
});
</script>