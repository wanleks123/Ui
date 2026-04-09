<template>
    <MultiSelect
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #dropdownicon>
            <ChevronDownIcon />
        </template>
        <template #loadingicon>
            <SpinnerIcon class="animate-spin" />
        </template>
        <template #filtericon>
            <SearchIcon class="text-surface-400" />
        </template>
        <template #clearicon="{ clearCallback }">
            <TimesIcon @click="clearCallback" class="text-surface-400 absolute top-1/2 -mt-2 end-10" />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </MultiSelect>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import SearchIcon from '@primevue/icons/search';
import SpinnerIcon from '@primevue/icons/spinner';
import TimesIcon from '@primevue/icons/times';
import MultiSelect, { type MultiSelectPassThroughOptions, type MultiSelectProps } from 'primevue/multiselect';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ MultiSelectProps {}
defineProps<Props>();

const theme = ref<MultiSelectPassThroughOptions>({
    root: ({ props, state }: any) => ({
        class: [
            'inline-flex cursor-pointer relative select-none rounded-md transition-all duration-200',
            'bg-surface-0 dark:bg-surface-950',
            'border',
            {
                'border-surface-300 dark:border-surface-600': !props.invalid,
                'border-red-500 dark:border-red-400': props.invalid,
                'ring-1 ring-primary-500 dark:ring-primary-400': state.focused && !props.invalid
            },
            { 'hover:border-surface-400 dark:hover:border-surface-700': !props.invalid && !state.focused },
            { 'bg-surface-200 dark:bg-surface-700 opacity-60 cursor-default pointer-events-none': props.disabled },
            'shadow-sm'
        ]
    }),
    labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
    label: ({ props }: any) => ({
        class: [
            'text-sm leading-none transition-colors duration-200 overflow-hidden whitespace-nowrap text-ellipsis',
            {
                'py-2 px-3': props.display === 'comma' || (props.display === 'chip' && !props.modelValue?.length),
                'py-1 px-1': props.display === 'chip' && props.modelValue?.length > 0
            },
            {
                'text-surface-800 dark:text-surface-0': props.modelValue?.length,
                'text-surface-400 dark:text-surface-500': !props.modelValue?.length
            }
        ]
    }),
    pcChip: {
        root: 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300',
        label: 'text-xs font-medium',
        removeIcon: 'size-3.5 cursor-pointer hover:text-red-500 transition-colors'
    },
    dropdown: 'flex items-center justify-center shrink-0 bg-transparent text-surface-400 w-10 rounded-r-md',
    overlay: 'bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 border border-surface-200 dark:border-surface-700 rounded-md shadow-lg mt-1',
    header: 'flex items-center justify-between p-2 gap-2 border-b border-surface-100 dark:border-surface-800',
    pcHeaderCheckbox: {
        root: 'relative inline-flex align-bottom size-5',
        box: ({ context }: any) => ({
            class: [
                'flex justify-center items-center rounded border transition-all duration-200 size-5',
                context.checked 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : 'bg-surface-0 dark:bg-surface-950 border-surface-300 dark:border-surface-700',
                'hover:border-primary-500'
            ]
        })
    },
    pcFilterContainer: 'relative flex-auto',
    pcFilter: {
        root: 'w-full text-sm py-1.5 ps-8 pe-3 rounded border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 outline-none focus:border-primary-500'
    },
    pcFilterIconContainer: 'absolute top-1/2 -mt-2 leading-none start-2.5',
    list: 'p-1 list-none m-0 flex flex-col gap-[2px]',
    option: ({ context }: any) => ({
        class: [
            'relative flex items-center px-3 py-2 gap-2 rounded-sm cursor-pointer transition-colors duration-200',
            {
                'text-surface-700 dark:text-surface-300': !context.focused && !context.selected,
                'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-0': context.focused && !context.selected,
                'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300': context.selected
            }
        ]
    }),
    pcOptionCheckbox: {
        root: 'relative inline-flex align-bottom size-4',
        box: ({ context }: any) => ({
            class: [
                'flex justify-center items-center rounded border transition-all duration-200 size-4',
                context.checked 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : 'bg-surface-0 dark:bg-surface-950 border-surface-300 dark:border-surface-700'
            ]
        }),
        icon: 'size-3'
    },
    optionGroup: 'font-bold text-xs uppercase tracking-wider mt-2 mb-1 px-3 text-surface-400 dark:text-surface-500',
    emptyMessage: 'py-2 px-3 text-sm text-surface-500',
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
});

const el = ref();
defineExpose({
    toggle: (event: any) => el.value.toggle(event)
});
</script>