<template>
    <SplitButton
        unstyled
        :model="model"
        :pt="splitButtonPreset"
        :ptOptions="{ mergeProps: ptViewMerge }"
        v-bind="$attrs"
    >
        <template #icon="slotProps" v-if="icon">
    <Icon 
        :name="icon" 
        :class="slotProps.class" 
        :size="iconSize || '20'"
    />
</template>

        <template #item="{ item }">
            <a 
                class="flex items-center gap-2 px-4 py-2 cursor-pointer text-sm text-surface-700 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors w-full"
            >
                <Icon 
                    v-if="item.icon" 
                    :name="item.icon" 
                    size="18" 
                    class="text-surface-500 dark:text-surface-400" 
                />
                <span>{{ item.label }}</span>
            </a>
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </SplitButton>
</template>

<script setup lang="ts">
import SplitButton, { type SplitButtonPassThroughOptions, type SplitButtonProps } from 'primevue/splitbutton';
import { ref, useAttrs } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ SplitButtonProps {
    icon?: string;
    iconSize?: string;
    model?: any[];
}
const props = defineProps<Props>();
const attrs = useAttrs();
const mergedProps = { ...props, ...attrs };

// ==========================================
// Base Button Classes (Mewarisi style Button)
// ==========================================
const buttonRootClasses = [
    // --- Base Layout ---
    'relative inline-flex items-center justify-center text-center align-bottom',
    'cursor-pointer select-none overflow-hidden',
    'transition duration-200 ease-in-out',

    // --- Spacing & Typography ---
    'gap-1.5 p-xlarge:gap-2',
    'font-semibold text-sm',
    'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',

    // --- Dynamic Layout ---
    'p-fluid:w-full p-vertical:flex-col',

    // --- Sizing (Rounded diatur di preset) ---
    'px-2.5 py-1.5', 
    'p-small:px-2 p-small:py-1',
    'p-large:px-3 p-large:py-2',
    'p-xlarge:px-3.5 p-xlarge:py-2.5',

    // --- Shapes & State ---
    'p-raised:shadow-lg',
    'p-disabled:opacity-60 p-disabled:pointer-events-none p-disabled:cursor-default',

    // ================= COLORS =================
    'text-white bg-primary-600 border border-primary-600 shadow-xs dark:shadow-none hover:bg-primary-500 hover:border-primary-500 active:bg-primary-700 active:border-primary-700 focus-visible:outline-primary-600 dark:bg-primary-500 dark:border-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-500 dark:active:bg-primary-600 dark:active:border-primary-600',
    'p-secondary:bg-surface-100 p-secondary:border-surface-100 p-secondary:text-surface-900 p-secondary:hover:bg-surface-200 p-secondary:hover:border-surface-200 p-secondary:active:bg-surface-300 p-secondary:active:border-surface-300 p-secondary:focus-visible:outline-surface-500 dark:p-secondary:bg-surface-700 dark:p-secondary:border-surface-700 dark:p-secondary:text-white dark:p-secondary:hover:bg-surface-600 dark:p-secondary:hover:border-surface-600 dark:p-secondary:active:bg-surface-800 dark:p-secondary:active:border-surface-800',
    'p-success:bg-teal-600 p-success:border-teal-600 p-success:hover:bg-teal-500 p-success:hover:border-teal-500 p-success:active:bg-teal-700 p-success:active:border-teal-700 p-success:focus-visible:outline-teal-600 dark:p-success:bg-teal-500 dark:p-success:border-teal-500 dark:p-success:hover:bg-teal-400 dark:p-success:hover:border-teal-400 dark:p-success:active:bg-teal-600 dark:p-success:active:border-teal-600',
    'p-info:bg-cyan-600 p-info:border-cyan-600 p-info:hover:bg-cyan-500 p-info:hover:border-cyan-500 p-info:active:bg-cyan-700 p-info:active:border-cyan-700 p-info:focus-visible:outline-cyan-600 dark:p-info:bg-cyan-500 dark:p-info:border-cyan-500 dark:p-info:hover:bg-cyan-400 dark:p-info:hover:border-cyan-400 dark:p-info:active:bg-cyan-600 dark:p-info:active:border-cyan-600',
    'p-warn:bg-amber-600 p-warn:border-amber-600 p-warn:hover:bg-amber-500 p-warn:hover:border-amber-500 p-warn:active:bg-amber-700 p-warn:active:border-amber-700 p-warn:focus-visible:outline-amber-600 dark:p-warn:bg-amber-500 dark:p-warn:border-amber-500 dark:p-warn:hover:bg-amber-400 dark:p-warn:hover:border-amber-400 dark:p-warn:active:bg-amber-600 dark:p-warn:active:border-amber-600',
    'p-danger:bg-red-600 p-danger:border-red-600 p-danger:hover:bg-red-500 p-danger:hover:border-red-500 p-danger:active:bg-red-700 p-danger:active:border-red-700 p-danger:focus-visible:outline-red-600 dark:p-danger:bg-red-500 dark:p-danger:border-red-500 dark:p-danger:hover:bg-red-400 dark:p-danger:hover:border-red-400 dark:p-danger:active:bg-red-600 dark:p-danger:active:border-red-600',
    'p-contrast:bg-surface-900 p-contrast:border-surface-900 p-contrast:text-white p-contrast:hover:bg-surface-800 p-contrast:hover:border-surface-800 p-contrast:active:bg-black p-contrast:active:border-black p-contrast:focus-visible:outline-surface-500 dark:p-contrast:bg-surface-0 dark:p-contrast:border-surface-0 dark:p-contrast:text-surface-900 dark:p-contrast:hover:bg-surface-100 dark:p-contrast:hover:border-surface-100 dark:p-contrast:active:bg-surface-200 dark:p-contrast:active:border-surface-200',

    // ================= VARIANTS =================
    'p-text:bg-transparent p-text:border-transparent p-text:shadow-none p-outlined:bg-transparent p-outlined:hover:bg-surface-100/50 p-outlined:shadow-none dark:p-outlined:bg-transparent dark:p-outlined:hover:bg-surface-800/50 dark:p-outlined:shadow-none p-outlined:active:bg-surface-100/80 dark:p-outlined:active:bg-surface-950/10',
    'p-text:text-primary-600 hover:p-text:bg-primary-300/10 active:p-text:bg-primary-300/20 dark:p-text:text-primary-400 p-text:p-secondary:text-surface-500 hover:p-text:p-secondary:bg-surface-300/10 active:p-text:p-secondary:bg-surface-300/20 dark:p-text:p-secondary:text-surface-300',
    'p-outlined:border-primary hover:p-outlined:bg-primary-300/10 active:p-outlined:bg-primary-300/20 p-outlined:text-primary p-outlined:p-secondary:border-surface-500 hover:p-outlined:p-secondary:bg-surface-300/10 active:p-outlined:p-secondary:bg-surface-300/20 p-outlined:p-secondary:text-surface-500 dark:p-outlined:p-secondary:text-surface-300',
].join(' ');

// ==========================================
// Integrasi Preset ke SplitButton (Diperbaiki)
// ==========================================
const splitButtonPreset = ref<SplitButtonPassThroughOptions>({
    root: ({ props }) => ({
        class: [
            // Kontainer
            'inline-flex relative ',
            // Menghapus 'gap-px' agar tidak ada garis hitam/bolong di antara tombol
            { 'shadow-lg': props.raised }
        ]
    }),
    
    // Pass-through ke child Button (Kiri)
    pcButton: {
        root: [
            buttonRootClasses,
            'rounded-md rounded-r-none border-r-0' // Menghilangkan radius & border di sisi kanan agar rata dengan dropdown
        ].join(' '),
        label: ({ props: btnProps }) => ({
            class: [
                'duration-200 font-semibold text-sm',
                { 'hover:underline': btnProps.link },
                { 'flex-1': btnProps.label !== null, 'invisible w-0': btnProps.label == null }
            ]
        }),
        icon: 'w-5 h-5 shrink-0 p-left:-ml-0.5 p-right:-mr-0.5 p-right:order-1'
    },

    // Pass-through ke child Dropdown Button (Kanan)
    pcDropdown: {
        root: [
            buttonRootClasses, 
            'rounded-md rounded-l-none', // Menghilangkan radius di sisi kiri
            '!border-l-white/30 dark:!border-l-surface-900/30', // Menambahkan garis pembatas transparan khusus sebagai pemisah (Solusi Gambar 1)
            '!px-3' // Override padding agar proporsional
        ].join(' '),
        icon: 'w-4 h-4 shrink-0'
    },

    // Pass-through ke Menu List (Dropdown)
    pcMenu: {
        // Mengganti min-w-full menjadi min-w-[12rem] agar lebarnya tidak memenuhi Toolbar/layar (Solusi Gambar 2)
        root: 'bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md shadow-lg py-1 mt-1 z-50 min-w-[12rem]',
        menu: 'm-0 p-0 list-none outline-none flex flex-col',
        separator: 'border-t border-surface-200 dark:border-surface-700 my-1'
    }
});
</script>