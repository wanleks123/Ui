<template>
    <Checkbox
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #icon="{ checked, indeterminate, dataP }">
            <svg 
                v-if="checked || indeterminate"
                :class="theme.icon" 
                :data-p="dataP" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    v-if="checked"
                    d="M3 8L6 11L11 3.5" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                />
                <path 
                    v-if="indeterminate"
                    d="M3 7H11" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                />
            </svg>
        </template>
    </Checkbox>
</template>

<script setup lang="ts">
import Checkbox, { type CheckboxPassThroughOptions, type CheckboxProps } from 'primevue/checkbox';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ CheckboxProps {}
defineProps<Props>();

const theme = ref<CheckboxPassThroughOptions>({
    root: {
        class: [
            'relative inline-flex align-bottom select-none',
            'size-4' // Matches the 'size-4' from your layout
        ]
    },
    input: {
        class: [
            'peer appearance-none absolute inset-0 z-10 m-0 p-0',
            'w-full h-full cursor-pointer opacity-0'
        ]
    },
    box: ({ props, context }) => ({
        class: [
            // Layout & Shape
            'flex items-center justify-center',
            'size-4 rounded-sm border', // 'rounded-sm' matches the layout
            'transition-colors duration-200',

            // Default Colors (Unchecked)
            {
                'bg-surface-0 dark:bg-surface-950': !context.checked && !props.invalid,
                'border-surface-300 dark:border-surface-200': !context.checked && !props.invalid,
                'dark:border-white/20': !context.checked // Matching the layout's specific dark border
            },

            // Checked / Indeterminate States
            {
                'bg-primary-600 text-white dark:bg-primary-600 border-primary dark:border-primary-600': context.checked || context.indeterminate,
            },

            // Hover States
            {
                'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !props.invalid,
                'peer-hover:bg-primary-emphasis peer-hover:border-primary-emphasis dark:peer-hover:bg-primary-500 dark:peer-hover:border-primary-500': !props.disabled && context.checked
            },

            // Focus State
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary',

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // Disabled State
            {
                'opacity-50 bg-surface-200 dark:bg-surface-700 cursor-default pointer-events-none': props.disabled
            }
        ]
    }),
    icon: {
        class: [
            'size-3.5 shrink-0',
            'text-primary-contrast' // Ensures checkmark is visible against primary bg
        ]
    }
});
</script>