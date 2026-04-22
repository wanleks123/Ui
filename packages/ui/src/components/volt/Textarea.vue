<template>
    <Textarea
        unstyled
        :size="size" 
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    />
</template>

<script setup lang="ts">
import Textarea, { type TextareaPassThroughOptions, type TextareaProps } from 'primevue/textarea';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

// Definisikan props agar bisa diterima dari parent
interface Props extends /* @vue-ignore */ TextareaProps {
    size?: 'small' | 'large' | undefined;
}
const props = defineProps<Props>();

const theme = ref<TextareaPassThroughOptions>({
    root: ({ props }: any) => ({
        class: [
            // Appearance & Shape
            'appearance-none rounded-lg block w-full outline-1 -outline-offset-1',
            
            // Warna (Sudah disamakan/seragam)
            'bg-surface-0 dark:bg-surface-950',
            'text-surface-900 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            {
                'outline-surface-300 dark:outline-surface-700': !props.invalid,
                'outline-red-500 dark:outline-red-400': props.invalid
            },

            // --- LOGIKA UKURAN (SIZING) ---
            // Small
            { 'text-xs px-2 py-1': props.size === 'small' },
            
            // Default (Normal) - Aktif jika size tidak diisi
            { 'text-sm px-3 py-1.5': !props.size || props.size === undefined },
            
            // Large
            { 'text-lg px-4 py-3': props.size === 'large' },

            // States & Transitions
            {
                'hover:outline-surface-400 dark:hover:outline-surface-600': !props.disabled && !props.invalid,
                'focus:outline-2 focus:-outline-offset-2 focus:outline-primary-500 dark:focus:outline-primary-400': !props.disabled,
                'bg-surface-100 dark:bg-surface-800 opacity-60 cursor-not-allowed': props.disabled
            },
            'transition-all duration-200 shadow-sm'
        ]
    })
});
</script>