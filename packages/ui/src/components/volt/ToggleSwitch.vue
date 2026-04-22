<script setup lang="ts">
import ToggleSwitch, { type ToggleSwitchPassThroughOptions, type ToggleSwitchProps } from 'primevue/toggleswitch';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToggleSwitchProps {}
defineProps<Props>();

const theme = ref<ToggleSwitchPassThroughOptions>({
    root: ({ props }: any) => ({
        class: [
            // Container utama
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
            'outline-offset-2 focus-visible:outline-2 focus-visible:outline-indigo-600',
            
            // Background Logic
            props.modelValue === props.trueValue 
                ? 'bg-indigo-600 dark:bg-indigo-500' 
                : 'bg-gray-200 dark:bg-slate-700',
            
            { 'opacity-50 pointer-events-none': props.disabled }
        ]
    }),
    input: 'peer absolute inset-0 size-full appearance-none opacity-0 z-10 cursor-pointer',
    
    // Slider kita jadikan container flex untuk menengahkan handle secara vertikal
    slider: ({ props }: any) => ({
        class: [
            'absolute inset-0 flex items-center px-0.5 rounded-full transition-colors duration-200',
            'inset-ring inset-ring-gray-900/5 dark:inset-ring-white/10',
        ]
    }),

    handle: ({ props }: any) => ({
        class: [
            // Bulatan
            'flex size-5 items-center justify-center rounded-full bg-white shadow-sm',
            'ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out',
            
            // Logic Gerak: translate-x-5 (20px)
            props.modelValue === props.trueValue ? 'translate-x-5' : 'translate-x-0'
        ]
    })
});
</script>

<template>
    <ToggleSwitch
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #handleicon="{ checked }">
            <svg v-if="!checked" class="size-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else class="size-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
        </template>
    </ToggleSwitch>
</template>