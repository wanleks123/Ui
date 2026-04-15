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
                :class="{ 'opacity-30': isDisabled }"
            />
        </template>
        <slot></slot>
    </AccordionHeader>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronUpIcon from '@primevue/icons/chevronup';
import AccordionHeader, { type AccordionHeaderPassThroughOptions, type AccordionHeaderProps } from 'primevue/accordionheader';
import { computed, inject } from 'vue'; // Kita butuh inject dan computed
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionHeaderProps {}
defineProps<Props>();

// AMBIL DATA DARI PANEL INDUK (Paling Akurat)
const pcPanel = inject<any>('$pcAccordionPanel', null);
const isDisabled = computed(() => pcPanel?.disabled === true);

const theme = computed<AccordionHeaderPassThroughOptions>(() => {
    return {
        root: (options: any) => {
            const isActive = options?.context?.active ?? false;
            const disabled = isDisabled.value; // Gunakan hasil inject tadi

            // 1. Class dasar (Layout & Focus)
            let classes = 'relative flex w-full items-center justify-between gap-x-6 px-4 py-5 sm:px-6 ' +
                          'select-none outline-hidden transition-all duration-200 ' +
                          'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 ';
            
            if (disabled) {
                // 2. JIKA DISABLED (Warna abu-abu & kursor dilarang)
                // Kita pakai bg-surface-200 agar abu-abunya lebih terlihat jelas
                classes += 'bg-surface-200/50 dark:bg-surface-800 text-surface-400 cursor-not-allowed opacity-70';
            } else {
                // 3. JIKA NORMAL (Warna asli Anda tidak berubah)
                classes += 'cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-0/2.5 text-surface-700 dark:text-surface-0';
                
                if (isActive) {
                    classes += ' bg-surface-50/50 dark:bg-surface-0/1';
                }
            }
            
            return { class: classes };
        }
    };
});
</script>