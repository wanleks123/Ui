<template>
    <ToggleSwitch
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #handleicon="{ checked }">
            <svg v-if="!checked" class="size-3 text-surface-400 dark:text-surface-600" fill="none" viewBox="0 0 12 12">
                <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else class="size-3 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ToggleSwitch>
</template>

<script setup lang="ts">
import ToggleSwitch, { type ToggleSwitchPassThroughOptions, type ToggleSwitchProps } from 'primevue/toggleswitch';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToggleSwitchProps {}
defineProps<Props>();

const theme = ref<ToggleSwitchPassThroughOptions>({
    root: ({ props }: any) => ({
        class: [
            'inline-flex shrink-0 relative',
            'w-11 h-6 p-0.5 rounded-full',
            'transition-colors duration-200 ease-in-out',
            { 'opacity-60 cursor-default pointer-events-none': props.disabled }
        ]
    }),
    input: 'peer absolute inset-0 size-full appearance-none opacity-0 z-10 cursor-pointer',
    slider: ({ props }: any) => ({
        class: [
            'absolute inset-0 rounded-full transition-colors duration-200 ease-in-out',
            'inset-ring inset-ring-surface-900/5 dark:inset-ring-white/10',
            
            // Background Colors (Surface/Primary replacement)
            props.modelValue === props.trueValue 
                ? 'bg-primary-600 dark:bg-primary-500' 
                : 'bg-surface-200 dark:bg-white/5',
            
            // Focus & Invalid States
            'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary-600 dark:peer-focus-visible:outline-primary-500',
            { 'ring-1 ring-red-500 dark:ring-red-400': props.invalid }
        ]
    }),
    handle: ({ props }: any) => ({
        class: [
            'relative flex size-5 items-center justify-center rounded-full bg-white shadow-xs',
            'ring-1 ring-surface-900/5 transition-transform duration-200 ease-in-out',
            'top-0', // Centered within the root p-0.5
            
            // Translation logic (20px is the translate-x-5 equivalent for this size)
            props.modelValue === props.trueValue ? 'translate-x-5' : 'translate-x-0'
        ]
    })
});
</script>