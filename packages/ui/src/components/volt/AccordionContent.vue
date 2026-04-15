<template>
    <BaseAccordionContent
        unstyled
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <slot></slot>
    </BaseAccordionContent>
</template>

<script setup lang="ts">
// Import menggunakan nama alias "BaseAccordionContent" agar tidak bentrok dengan nama file komponenmu
import BaseAccordionContent from 'primevue/accordioncontent';
import type { AccordionContentPassThroughOptions } from 'primevue/accordioncontent';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

const theme = ref<AccordionContentPassThroughOptions>({
    content: 'px-4 pb-5 pt-4 sm:px-6 text-sm text-surface-600 dark:text-surface-400 bg-surface-0 dark:bg-transparent',
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