<template>
    <AutoComplete
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #dropdownicon>
            <ChevronDownIcon class="size-5" />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AutoComplete>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import AutoComplete, { type AutoCompletePassThroughOptions, type AutoCompleteProps } from 'primevue/autocomplete';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AutoCompleteProps {}
defineProps<Props>();

const theme = ref<AutoCompletePassThroughOptions>({
    root: ({ props }) => ({
        class: [
            'relative inline-flex',
            { 'flex w-full': props.fluid }
        ]
    }),
    pcInputText: {
        root: ({ props, parent }) => ({
            class: [
                'block w-full rounded-md py-1.5 text-base sm:text-sm/6 transition-all duration-200',
                'bg-white dark:bg-white/5',
                'text-surface-900 dark:text-white',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                // Outline logic from Headless UI
                'outline-1 -outline-offset-1 outline-surface-300 dark:outline-white/10',
                'focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 dark:focus:outline-primary-500',
                // Adjust padding if dropdown exists
                props.dropdown ? 'pr-10 pl-3' : 'px-3',
                // Invalid State
                { 'outline-red-500 dark:outline-red-400': parent.props.invalid },
                // Disabled State
                { 'opacity-50 cursor-not-allowed bg-surface-50': props.disabled }
            ]
        })
    },
    inputMultiple: ({ state }) => ({
        class: [
            'flex items-center flex-wrap gap-2 m-0 list-none p-1.5 w-full rounded-md min-h-10',
            'bg-white dark:bg-white/5',
            'outline-1 -outline-offset-1 outline-surface-300 dark:outline-white/10',
            state.focused ? 'outline-2 -outline-offset-2 outline-primary-600 dark:outline-primary-500' : '',
            'cursor-text overflow-hidden transition-all duration-200'
        ]
    }),
    inputToken: 'py-0.5 px-0 ml-2 inline-flex flex-auto',
    pcChip: {
        root: 'inline-flex items-center rounded-sm gap-2 px-2 py-0.5 bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300'
    },
    inputChip: 'flex-auto inline-flex py-0.5',
    input: 'border-none outline-hidden bg-transparent m-0 p-0 shadow-none rounded-none w-full text-inherit',
    loader: 'absolute top-1/2 -mt-2 right-3 animate-spin text-surface-400',
    dropdown: {
        class: [
            'absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md',
            'text-surface-400 hover:text-surface-500 focus:outline-hidden',
            'transition-colors duration-200'
        ]
    },
    overlay: `absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md 
        bg-white dark:bg-surface-800 
        py-1 text-base sm:text-sm shadow-lg 
        outline outline-black/5 dark:outline-white/10`,
    list: 'm-0 p-0 list-none',
    option: ({ context }) => ({
        class: [
            'relative cursor-default select-none px-3 py-2 transition-colors duration-150',
            // Active/Focus State (Indigo-600 replacement)
            context.focused || context.selected 
                ? 'bg-primary-600 text-white dark:bg-primary-500 outline-hidden' 
                : 'text-surface-900 dark:text-white',
            // Hover fallback
            'hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500'
        ]
    }),
    optionGroup: 'font-semibold m-0 py-2 px-3 text-surface-400 dark:text-surface-500 cursor-auto',
    emptyMessage: 'py-2 px-3 text-surface-500 dark:text-surface-400',
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition ease-out duration-100',
        enterToClass: 'opacity-100',
        leaveFromClass: 'opacity-100',
        leaveActiveClass: 'transition ease-in duration-100',
        leaveToClass: 'opacity-0'
    }
});
</script>