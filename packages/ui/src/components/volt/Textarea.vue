<template>
    <Textarea
        unstyled
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

interface Props extends /* @vue-ignore */ TextareaProps {}
defineProps<Props>();

const theme = ref<TextareaPassThroughOptions>({
    root: ({ context, props }: any) => ({
        class: [
            // Appearance & Shape
            'appearance-none rounded-lg block w-full outline-1 -outline-offset-1',
            
            // Background & Border (Surface replacement for Gray)
            'bg-surface-0 dark:bg-white/5',
            {
                'outline-surface-300 dark:outline-white/10': !props.invalid,
                'outline-red-500 dark:outline-red-400': props.invalid
            },

            // Typography
            'text-base text-surface-900 dark:text-white sm:text-sm/6',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',

            // Spacing
            'px-3 py-1.5',

            // States (Primary replacement for Indigo)
            {
                'hover:outline-surface-400 dark:hover:outline-white/20': !context.disabled && !props.invalid,
                'focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 dark:focus:outline-primary-500': !context.disabled,
                'bg-surface-100 dark:bg-surface-800 opacity-60 cursor-not-allowed': context.disabled
            },

            // Transitions
            'transition-all duration-200 shadow-sm'
        ]
    })
});
</script>