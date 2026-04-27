<template>
    <Button
        unstyled
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template #icon="slotProps">
            <Icon 
                v-if="icon" 
                :name="icon" 
                :class="slotProps.class" 
                :size="iconSize || '20'"
            />
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Button>
</template>

<script setup lang="ts">
import Button, { type ButtonPassThroughOptions, type ButtonProps } from 'primevue/button';
import { ref, useAttrs } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ButtonProps {
    icon?: string; // Kita terima string icon seperti 'ph:user'
}
const props = defineProps<Props>();
const attrs = useAttrs();

const mergedProps = { ...props, ...attrs };

console.log(attrs);

const rootClasses = [
    // --- Base Layout ---
    'relative inline-flex items-center justify-center text-center align-bottom',
    'cursor-pointer select-none overflow-hidden',
    'transition duration-200 ease-in-out',

    // --- Spacing ---
    'gap-1.5 p-xlarge:gap-2',

    // --- Typography & Focus ---
    'font-semibold text-sm',
    'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',

    // --- Dynamic Layout ---
    'p-fluid:w-full',
    'p-vertical:flex-col',

    // --- Sizing & Shapes ---
    'px-2.5 py-1.5 rounded-md', // Default
    'p-small:px-2 p-small:py-1 p-small:rounded-sm',
    'p-large:px-3 p-large:py-2 p-large:rounded-md',
    'p-xlarge:px-3.5 p-xlarge:py-2.5 p-xlarge:rounded-md',

    // --- Special Shapes ---
    'p-raised:shadow-lg',
    'p-rounded:rounded-full',

    // --- Icon Only Mode ---
    'p-icon-only:w-9 p-icon-only:h-9 p-icon-only:p-0 p-icon-only:gap-0',
    'p-icon-only:p-rounded:rounded-[50%]',
    'p-small:p-icon-only:w-7 p-small:p-icon-only:h-7',
    'p-large:p-icon-only:w-10 p-large:p-icon-only:h-10',
    'p-xlarge:p-icon-only:w-11 p-xlarge:p-icon-only:h-11',

    // --- Disabled State ---
    'p-disabled:opacity-60 p-disabled:pointer-events-none p-disabled:cursor-default',

    // ================= COLORS =================

    // --- Primary (Default) ---
    'text-white bg-primary-600 border border-primary-600 shadow-xs dark:shadow-none',
    'hover:bg-primary-500 hover:border-primary-500',
    'active:bg-primary-700 active:border-primary-700',
    'focus-visible:outline-primary-600',
    'dark:bg-primary-500 dark:border-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500',
    'dark:active:bg-primary-600 dark:active:border-primary-600',

    // --- Secondary ---
    'p-secondary:bg-surface-100 p-secondary:border-surface-100 p-secondary:text-surface-900',
    'p-secondary:hover:bg-surface-200 p-secondary:hover:border-surface-200',
    'p-secondary:active:bg-surface-300 p-secondary:active:border-surface-300',
    'p-secondary:focus-visible:outline-surface-500',
    'dark:p-secondary:bg-surface-700 dark:p-secondary:border-surface-700 dark:p-secondary:text-white',
    'dark:p-secondary:hover:bg-surface-600 dark:p-secondary:hover:border-surface-600',
    'dark:p-secondary:active:bg-surface-800 dark:p-secondary:active:border-surface-800',

    // --- Success ---
    'p-success:bg-teal-600 p-success:border-teal-600',
    'p-success:hover:bg-teal-500 p-success:hover:border-teal-500',
    'p-success:active:bg-teal-700 p-success:active:border-teal-700',
    'p-success:focus-visible:outline-teal-600',
    'dark:p-success:bg-teal-500 dark:p-success:border-teal-500',
    'dark:p-success:hover:bg-teal-400 dark:p-success:hover:border-teal-400',
    'dark:p-success:active:bg-teal-600 dark:p-success:active:border-teal-600',

    // --- Info ---
    'p-info:bg-cyan-600 p-info:border-cyan-600',
    'p-info:hover:bg-cyan-500 p-info:hover:border-cyan-500',
    'p-info:active:bg-cyan-700 p-info:active:border-cyan-700',
    'p-info:focus-visible:outline-cyan-600',
    'dark:p-info:bg-cyan-500 dark:p-info:border-cyan-500',
    'dark:p-info:hover:bg-cyan-400 dark:p-info:hover:border-cyan-400',
    'dark:p-info:active:bg-cyan-600 dark:p-info:active:border-cyan-600',

    // --- Warn ---
    'p-warn:bg-amber-600 p-warn:border-amber-600',
    'p-warn:hover:bg-amber-500 p-warn:hover:border-amber-500',
    'p-warn:active:bg-amber-700 p-warn:active:border-amber-700',
    'p-warn:focus-visible:outline-amber-600',
    'dark:p-warn:bg-amber-500 dark:p-warn:border-amber-500',
    'dark:p-warn:hover:bg-amber-400 dark:p-warn:hover:border-amber-400',
    'dark:p-warn:active:bg-amber-600 dark:p-warn:active:border-amber-600',

    // --- Danger ---
    'p-danger:bg-red-600 p-danger:border-red-600',
    'p-danger:hover:bg-red-500 p-danger:hover:border-red-500',
    'p-danger:active:bg-red-700 p-danger:active:border-red-700',
    'p-danger:focus-visible:outline-red-600',
    'dark:p-danger:bg-red-500 dark:p-danger:border-red-500',
    'dark:p-danger:hover:bg-red-400 dark:p-danger:hover:border-red-400',
    'dark:p-danger:active:bg-red-600 dark:p-danger:active:border-red-600',

    // --- Contrast ---
    'p-contrast:bg-surface-900 p-contrast:border-surface-900 p-contrast:text-white',
    'p-contrast:hover:bg-surface-800 p-contrast:hover:border-surface-800',
    'p-contrast:active:bg-black p-contrast:active:border-black',
    'p-contrast:focus-visible:outline-surface-500',
    'dark:p-contrast:bg-surface-0 dark:p-contrast:border-surface-0 dark:p-contrast:text-surface-900',
    'dark:p-contrast:hover:bg-surface-100 dark:p-contrast:hover:border-surface-100',
    'dark:p-contrast:active:bg-surface-200 dark:p-contrast:active:border-surface-200',

    // ================= VARIANTS =================

    // --- Text & Outlined (Reset Base) ---
    'p-text:bg-transparent p-text:border-transparent p-text:shadow-none',
    'p-outlined:bg-transparent p-outlined:hover:bg-surface-100/50 p-outlined:shadow-none dark:p-outlined:bg-transparent dark:p-outlined:hover:bg-surface-800/50 dark:p-outlined:shadow-none',
    'p-outlined:active:bg-surface-100/80 dark:p-outlined:active:bg-surface-950/10',

    // --- Text Colors ---
    // Note: Used /20 for active state vs /10 for hover
    'p-text:text-primary-600 hover:p-text:bg-primary-300/10 active:p-text:bg-primary-300/20 dark:p-text:text-primary-400',
    'p-text:p-secondary:text-surface-500 hover:p-text:p-secondary:bg-surface-300/10 active:p-text:p-secondary:bg-surface-300/20 dark:p-text:p-secondary:text-surface-300',
    'p-text:p-success:text-teal-500 hover:p-text:p-success:bg-teal-300/10 active:p-text:p-success:bg-teal-300/20 dark:p-text:p-success:text-teal-400',
    'p-text:p-info:text-blue-500 hover:p-text:p-info:bg-blue-300/10 active:p-text:p-info:bg-blue-300/20 dark:p-text:p-info:text-blue-400',
    'p-text:p-warn:text-amber-500 hover:p-text:p-warn:bg-amber-300/10 active:p-text:p-warn:bg-amber-300/20 dark:p-text:p-warn:text-amber-400',
    'p-text:p-danger:text-red-500 hover:p-text:p-danger:bg-red-300/10 active:p-text:p-danger:bg-red-300/20 dark:p-text:p-danger:text-red-400',
    'p-text:p-contrast:text-surface-900 hover:p-text:p-contrast:bg-surface-900/10 active:p-text:p-contrast:bg-surface-900/20 dark:p-text:p-contrast:text-surface-0 dark:hover:p-text:p-contrast:bg-white/10 dark:active:p-text:p-contrast:bg-white/20',

    // --- Outlined Colors ---
    'p-outlined:border-primary hover:p-outlined:bg-primary-300/10 active:p-outlined:bg-primary-300/20 p-outlined:text-primary',

    'p-outlined:p-secondary:border-surface-500 hover:p-outlined:p-secondary:bg-surface-300/10 active:p-outlined:p-secondary:bg-surface-300/20 p-outlined:p-secondary:text-surface-500 dark:p-outlined:p-secondary:text-surface-300',

    'p-outlined:p-success:border-teal-500 hover:p-outlined:p-success:bg-teal-300/10 active:p-outlined:p-success:bg-teal-300/20 p-outlined:p-success:text-teal-500',

    'p-outlined:p-info:border-blue-500 hover:p-outlined:p-info:bg-blue-300/10 active:p-outlined:p-info:bg-blue-300/20 p-outlined:p-info:text-blue-500',

    'p-outlined:p-warn:border-amber-500 hover:p-outlined:p-warn:bg-amber-300/10 active:p-outlined:p-warn:bg-amber-300/20 p-outlined:p-warn:text-amber-500',

    'p-outlined:p-danger:border-red-500 hover:p-outlined:p-danger:bg-red-300/10 active:p-outlined:p-danger:bg-red-300/20 p-outlined:p-danger:text-red-500',

    'p-outlined:p-contrast:border-surface-900 hover:p-outlined:p-contrast:bg-surface-900/10 active:p-outlined:p-contrast:bg-surface-900/20 p-outlined:p-contrast:text-surface-900 dark:p-outlined:p-contrast:border-surface-0 dark:p-outlined:p-contrast:text-surface-0',

    // --- Link & Plain ---
    '[&[data-p~=link]]:text-primary [&[data-p~=link]]:bg-transparent [&[data-p~=link]]:border-transparent [&[data-p~=link]]:shadow-none [&[data-p~=link]]:hover:underline [&[data-p~=link]]:focus:ring-primary',

    '[&[data-p~=plain]]:text-white [&[data-p~=plain]]:bg-gray-500 [&[data-p~=plain]]:border-gray-500 [&[data-p~=plain]]:hover:bg-gray-600 [&[data-p~=plain]]:active:bg-gray-700 [&[data-p~=plain]]:hover:border-gray-600',

    'p-text:[&[data-p~=plain]]:text-surface-500 p-text:[&[data-p~=plain]]:bg-transparent p-text:[&[data-p~=plain]]:border-transparent hover:p-text:[&[data-p~=plain]]:bg-surface-300/10 active:p-text:[&[data-p~=plain]]:bg-surface-300/20',

    'p-outlined:[&[data-p~=plain]]:text-surface-500 p-outlined:[&[data-p~=plain]]:border-gray-500 p-outlined:[&[data-p~=plain]]:bg-transparent hover:p-outlined:[&[data-p~=plain]]:bg-surface-300/10 active:p-outlined:[&[data-p~=plain]]:bg-surface-300/20'

].join(' ');

const theme = ref<ButtonPassThroughOptions>({
    root: rootClasses,
    label: ({ props }) => ({
        class: [
            'duration-200 font-semibold text-sm',
            { 'hover:underline': props.link },
            { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
        ]
    }),
    icon: [
        'w-5 h-5 shrink-0',
        'p-left:-ml-0.5',
        'p-right:-mr-0.5 p-right:order-1',
    ].join(' '),
    loadingIcon: [
        'w-5 h-5 shrink-0 animate-spin',
        'p-left:-ml-0.5',
        'p-right:-mr-0.5 p-right:order-1',
    ].join(' '),
    pcBadge: {
        root: [
            `min-w-4 h-4 leading-4 rounded-full text-primary text-xs font-bold`,
            {
                'bg-primary text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text),
                'bg-teal-500 text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text) && mergedProps.severity === 'success',
                'bg-cyan-500 text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text) && mergedProps.severity === 'info',
                'bg-amber-500 text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text) && mergedProps.severity === 'warn',
                'bg-red-500 text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text) && mergedProps.severity === 'danger',
                'bg-surface-950 dark:bg-surface-0 text-surface-0 dark:text-surface-950': (mergedProps.outlined || mergedProps.text) && mergedProps.severity === 'contrast',
                'bg-surface-0 text-primary': !mergedProps.outlined && !mergedProps.text,
                'bg-surface-0 text-teal-500': !mergedProps.outlined && !mergedProps.text && mergedProps.severity === 'success',
                'bg-surface-0 text-cyan-500': !mergedProps.outlined && !mergedProps.text && mergedProps.severity === 'info',
                'bg-surface-0 text-amber-500': !mergedProps.outlined && !mergedProps.text && mergedProps.severity === 'warn',
                'bg-surface-0 text-red-500': !mergedProps.outlined && !mergedProps.text && mergedProps.severity === 'danger',
                'bg-surface-0 text-surface-950': !mergedProps.outlined && !mergedProps.text && mergedProps.severity === 'contrast',
            }
        ]
    }
});
</script>