<template>
    <Message
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #closeicon>
            <TimesIcon />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Message>
</template>

<script setup lang="ts">
import TimesIcon from '@primevue/icons/times';
import Message, { type MessagePassThroughOptions, type MessageProps } from 'primevue/message';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ MessageProps {}
defineProps<Props>();

const theme = ref<MessagePassThroughOptions>({
    root: ({ props }: any) => ({
        class: [
            // Base Structure
            'relative w-full rounded-lg border transition-all duration-200',
            
            // Sizing Logic (Volt style)
            {
                'p-2.5': props.size === 'small',
                'p-4': props.size === null || props.size === undefined, // default
                'p-5': props.size === 'large'
            },

            // Severity & Variant Logic (Outlined vs Filled)
            {
                // Info
                'bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-300': props.severity === 'info' && props.variant !== 'outlined',
                'bg-transparent border-blue-500 text-blue-600': props.severity === 'info' && props.variant === 'outlined',

                // Success
                'bg-emerald-50/50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-300': props.severity === 'success' && props.variant !== 'outlined',
                'bg-transparent border-emerald-500 text-emerald-600': props.severity === 'success' && props.variant === 'outlined',

                // Warn
                'bg-amber-50/50 border-amber-200 text-amber-800 dark:bg-amber-950/20 dark:border-amber-800 dark:text-amber-300': props.severity === 'warn' && props.variant !== 'outlined',
                'bg-transparent border-amber-500 text-amber-600': props.severity === 'warn' && props.variant === 'outlined',

                // Error
                'bg-red-50/50 border-red-200 text-red-800 dark:bg-red-950/20 dark:border-red-800 dark:text-red-300': props.severity === 'error' && props.variant !== 'outlined',
                'bg-transparent border-red-500 text-red-600': props.severity === 'error' && props.variant === 'outlined',

                // Secondary
                'bg-surface-50 border-surface-200 text-surface-700': (props.severity === 'secondary' || !props.severity) && props.variant !== 'outlined',
                'bg-transparent border-surface-400 text-surface-600': (props.severity === 'secondary' || !props.severity) && props.variant === 'outlined'
            }
        ]
    }),
    content: {
        // Rapikan form: gunakan items-start agar icon tetap di atas jika teks/form memanjang
        class: 'flex items-start gap-3'
    },
    icon: ({ props }: any) => ({
        class: [
            'shrink-0 leading-none',
            {
                'size-4 mt-0.5': props.size === 'small',
                'size-5 mt-0.5': props.size === null || props.size === undefined,
                'size-6 mt-1': props.size === 'large'
            }
        ]
    }),
    text: ({ props }: any) => ({
        class: [
            'font-medium leading-6 flex-1', // flex-1 agar teks mengambil sisa ruang
            {
                'text-xs': props.size === 'small',
                'text-sm': props.size === null || props.size === undefined,
                'text-base': props.size === 'large'
            }
        ]
    }),
    closeButton: ({ props }: any) => ({
        class: [
            'inline-flex items-center justify-center shrink-0 ml-auto rounded-md transition-all duration-200',
            'hover:bg-black/5 dark:hover:bg-white/10',
            {
                'w-5 h-5': props.size === 'small',
                'w-7 h-7': props.size === null || props.size === undefined,
                'w-9 h-9': props.size === 'large'
            }
        ]
    }),
    closeIcon: ({ props }: any) => ({
        class: [
            {
                'size-3': props.size === 'small',
                'size-4': props.size === null || props.size === undefined,
                'size-5': props.size === 'large'
            }
        ]
    }),
    transition: {
        enterFromClass: 'opacity-0 translate-y-2',
        enterActiveClass: 'transition-all duration-300 ease-out',
        leaveActiveClass: 'transition-opacity duration-200 ease-in',
        leaveToClass: 'opacity-0'
    }
});
</script>