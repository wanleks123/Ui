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
            'rounded-md p-4 outline outline-1',
            {
                // Info - Blue/Primary
                'bg-primary-50/95 dark:bg-primary-500/10 outline-primary-200 dark:outline-primary-500/20 text-primary-700 dark:text-primary-300': props.severity === 'info',
                // Success - Green
                'bg-green-50 dark:bg-green-500/10 outline-green-200 dark:outline-green-500/20 text-green-700 dark:text-green-300': props.severity === 'success',
                // Warn - Yellow/Orange
                'bg-yellow-50 dark:bg-yellow-500/10 outline-yellow-200 dark:outline-yellow-500/20 text-yellow-700 dark:text-yellow-300': props.severity === 'warn',
                // Error - Red
                'bg-red-50 dark:bg-red-500/10 outline-red-200 dark:outline-red-500/20 text-red-700 dark:text-red-300': props.severity === 'error',
                // Secondary - Surface
                'bg-surface-50 dark:bg-surface-500/10 outline-surface-200 dark:outline-surface-500/20 text-surface-700 dark:text-surface-300': props.severity === 'secondary' || !props.severity,
                // Contrast
                'bg-surface-950 dark:bg-surface-0 outline-surface-950 dark:outline-surface-0 text-surface-0 dark:text-surface-950': props.severity === 'contrast'
            }
        ]
    }),
    content: {
        class: 'flex items-start gap-3'
    },
    icon: {
        class: 'size-5 shrink-0 mt-0.5' // mt-0.5 helps align with the first line of text
    },
    text: {
        class: 'text-sm font-medium leading-6'
    },
    closeButton: ({ props }: any) => ({
        class: [
            'flex items-center justify-center shrink-0 ml-auto -mr-1.5 -mt-1.5',
            'w-7 h-7 rounded-full bg-transparent transition-colors duration-200',
            'hover:bg-surface-0/30 dark:hover:bg-white/5 focus:outline-hidden focus:ring-2 focus:ring-offset-2',
            {
                'focus:ring-primary-500': props.severity === 'info',
                'focus:ring-green-500': props.severity === 'success',
                'focus:ring-yellow-500': props.severity === 'warn',
                'focus:ring-red-500': props.severity === 'error',
                'focus:ring-surface-500': props.severity === 'secondary'
            }
        ]
    }),
    closeIcon: 'size-4',
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
});
</script>