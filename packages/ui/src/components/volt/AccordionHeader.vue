<template>
    <AccordionHeader
        unstyled
        v-bind="$props"
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template #toggleicon="slotProps: any">
            <component 
                :is="slotProps.active ? ChevronUpIcon : ChevronDownIcon" 
                class="size-5 flex-none text-surface-400 dark:text-surface-500" 
            />
        </template>
        <slot></slot>
    </AccordionHeader>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronUpIcon from '@primevue/icons/chevronup';
import AccordionHeader, { type AccordionHeaderPassThroughOptions, type AccordionHeaderProps } from 'primevue/accordionheader';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionHeaderProps {}
defineProps<Props>();

const theme = ref<AccordionHeaderPassThroughOptions>({
    root: (options: any) => {
        const isActive = options?.context?.active ?? false;
        let classes = 'relative flex w-full items-center justify-between gap-x-6 px-4 py-5 sm:px-6 ' +
                      'cursor-pointer select-none outline-hidden transition-colors duration-200 ' +
                      'hover:bg-surface-50 dark:hover:bg-surface-0/2.5 ' +
                      'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500';
        
        if (isActive) classes += ' bg-surface-50/50 dark:bg-surface-0/1';
        
        return { class: classes };
    }
});
</script>