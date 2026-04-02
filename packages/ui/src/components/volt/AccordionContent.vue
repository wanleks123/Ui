<template>
    <AccordionContent
        unstyled
        v-bind="$props"
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <slot></slot>
    </AccordionContent>
</template>

<script setup lang="ts">
import AccordionContent, { type AccordionContentPassThroughOptions, type AccordionContentProps } from 'primevue/accordioncontent';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionContentProps {}
defineProps<Props>();

const theme = ref<AccordionContentPassThroughOptions>({
    content: 'px-4 pb-5 sm:px-6 text-sm text-surface-600 dark:text-surface-400 bg-surface-0 dark:bg-transparent',
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-500 ease-in-out',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-300 ease-in-out',
        leaveToClass: 'max-h-0'
    }
});
</script>