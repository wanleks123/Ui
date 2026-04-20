<template>
    <MultiSelect
        ref="el"
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
        v-bind="$attrs"
    >
        <template #dropdownicon>
            <ChevronDownIcon />
        </template>
        <template #loadingicon>
            <SpinnerIcon class="animate-spin" />
        </template>
        <template #filtericon>
            <SearchIcon class="text-surface-400 dark:text-surface-500" />
        </template>
        <template #clearicon="{ clearCallback }">
            <TimesIcon @click="clearCallback" class="text-surface-400 hover:text-surface-600 dark:text-surface-500 absolute top-1/2 -mt-2 end-10 cursor-pointer" />
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </MultiSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MultiSelect, { type MultiSelectPassThroughOptions } from 'primevue/multiselect';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import SearchIcon from '@primevue/icons/search';
import SpinnerIcon from '@primevue/icons/spinner';
import TimesIcon from '@primevue/icons/times';
import { ptViewMerge } from './utils';

// Menggunakan defineProps tanpa interface kosong jika hanya meneruskan attrs
defineOptions({ inheritAttrs: false });

const el = ref();

const theme = ref<MultiSelectPassThroughOptions>({
    root: ({ props, state }: any) => ({
        class: [
            'inline-flex cursor-pointer relative select-none rounded-md transition-all duration-200',
            'bg-surface-0 dark:bg-surface-950 border shadow-sm',
            {
                'border-surface-300 dark:border-surface-700': !props.invalid,
                'border-red-500 dark:border-red-400': props.invalid,
                'ring-1 ring-primary-500 border-primary-500': state.focused
            }
        ]
    }),
    labelContainer: 'flex flex-auto overflow-hidden',
    label: ({ props }: any) => ({
        class: [
            'text-sm transition-colors duration-200 overflow-hidden whitespace-nowrap text-ellipsis',
            'flex items-center gap-2',
            props.display === 'chip' && props.modelValue?.length > 0 ? 'py-1 px-2' : 'py-2 px-3',
            props.modelValue?.length ? 'text-surface-800 dark:text-surface-0' : 'text-surface-400 dark:text-surface-500'
        ]
    }),
    pcChip: {
        root: 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300',
        label: 'text-xs font-medium',
        removeIcon: 'size-3 cursor-pointer hover:text-red-500'
    },
    dropdown: 'flex items-center justify-center shrink-0 text-surface-500 w-10',
    overlay: 'bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-md shadow-lg mt-1 overflow-hidden',
    
   header: 'flex items-center p-3 gap-3 border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800/50',
    
    pcHeaderCheckbox: {
        root: 'flex shrink-0 relative size-5 cursor-pointer select-none',
        input: 'absolute appearance-none opacity-0 m-0 p-0 size-full top-0 left-0 z-10 cursor-pointer',
        box: ({ context }: any) => ({
            class: [
                'flex items-center justify-center rounded border-2 transition-all duration-200 size-5',
                context.checked 
                    ? 'bg-primary-600 border-primary-600' 
                    : 'bg-surface-0 dark:bg-surface-950 border-surface-300 dark:border-surface-600',
            ]
        }),
        icon: 'text-white size-3 stroke-[3px]'
    },

    // KUNCI PERBAIKAN: Memastikan container benar-benar menjadi anchor
    pcFilterContainer: 'relative flex-auto min-h-[38px] flex items-center', 
    pcFilter: {
        root: ({ props }: any) => ({
            class: [
                'block w-full text-sm py-2 ps-10 pe-3 rounded-md transition-all duration-200', // ps-10 agar lebih lega
                'border border-surface-300 dark:border-surface-700',
                'bg-surface-0 dark:bg-surface-950',
                'text-surface-700 dark:text-surface-0',
                'outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500'
            ]
        })
    },
    // Memaksa posisi ikon di dalam input
    pcFilterIconContainer: 'absolute top-1/2 -translate-y-1/2 left-3 z-20 flex items-center justify-center pointer-events-none text-surface-400 dark:text-surface-500',

    list: 'p-1 list-none m-0 flex flex-col gap-1',
    option: ({ context }: any) => ({
        class: [
            'flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer transition-all duration-150',
            {
                'text-surface-700 dark:text-surface-300': !context.focused && !context.selected,
                'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white': context.focused && !context.selected,
                'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300': context.selected
            }
        ]
    }),

    // RESET TOTAL CHECKBOX OPTION
    pcOptionCheckbox: {
        root: 'inline-flex relative size-5 cursor-pointer select-none',
        input: 'absolute appearance-none opacity-0 m-0 p-0 size-full top-0 left-0 z-10 cursor-pointer', // Sembunyikan input asli
        box: ({ context }: any) => ({
            class: [
                'flex items-center justify-center rounded border-2 transition-all duration-200 size-5',
                context.checked 
                    ? 'bg-primary-600 border-primary-600' 
                    : 'bg-surface-0 dark:bg-surface-950 border-surface-300 dark:border-surface-600',
            ]
        }),
        icon: 'text-white size-3 stroke-[3px] z-20'
    },
    emptyMessage: 'py-2 px-3 text-sm text-surface-500'
});
</script>