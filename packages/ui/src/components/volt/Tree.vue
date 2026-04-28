<template>
    <Tree
        unstyled
        v-bind="$attrs"
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #togglericon="{ expanded }">
            <ChevronDownIcon v-if="expanded" class="size-4" />
            <ChevronRightIcon v-else class="size-4" />
        </template>
        
        <template #filtericon>
            <SearchIcon class="text-surface-400 size-4" />
        </template>

        <template #nodeicon="slotProps">
    <Icon 
        v-if="slotProps.node?.icon" 
        :icon="slotProps.node.icon" 
        :name="slotProps.node.icon" 
        :class="[slotProps.class, 'size-5 shrink-0']" 
    />
</template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Tree>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tree, { type TreePassThroughOptions, type TreeProps } from 'primevue/tree';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import SearchIcon from '@primevue/icons/search';
import { Icon } from '@iconify/vue'; 
import { ptViewMerge } from './utils';

// Props handling
interface Props extends /* @vue-ignore */ TreeProps {}
defineProps<Props>();

const theme = ref<TreePassThroughOptions>({
    root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 p-4
        p-scrollable:flex p-scrollable:flex-1 p-scrollable:h-full p-scrollable:flex-col`,
    pcFilterContainer: {
        root: `relative mb-2`
    },
    pcFilterInput: {
        root: `w-full appearance-none rounded-md outline-hidden
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            placeholder:text-surface-500 dark:placeholder:text-surface-400
            border border-surface-300 dark:border-surface-700
            hover:border-surface-400 dark:hover:border-surface-600
            focus:border-primary
            disabled:bg-surface-200 disabled:text-surface-500
            dark:disabled:bg-surface-700 dark:disabled:text-surface-400
            ps-3 pe-10 py-2 p-fluid:w-full
            transition-colors duration-200 shadow-sm`
    },
    pcFilterIconContainer: {
        root: `absolute top-1/2 -mt-2 leading-none end-3 z-1`
    },
    wrapper: `overflow-auto p-scrollable:flex-1`,
    rootChildren: `flex flex-col list-none m-0 gap-1 pt-1 pb-0 px-0`,
    node: `p-0 outline-none focus-visible:*:first:outline focus-visible:*:first:-outline-offset-1 focus-visible:*:first:outline-primary`,
    nodeContent: ({ context }: any) => ({
        class: [
            'group rounded-md px-2 py-1 flex items-center gap-2 transition-colors duration-200',
            'p-selectable:cursor-pointer p-selectable:select-none',
            // Hover state
            'hover:bg-surface-100 dark:hover:bg-surface-800',
            // Selected state
            context.selected ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-surface-700 dark:text-surface-0'
        ]
    }),
    nodeToggleButton: `cursor-pointer select-none inline-flex justify-center rounded-full items-center overflow-hidden relative flex-shrink-0
        w-7 h-7 p-0 p-leaf:invisible transition-colors duration-200 border-none
        bg-transparent hover:bg-surface-200 dark:hover:bg-surface-700
        text-surface-500 dark:text-surface-400`,
    nodeToggleIcon: ``,
    // CARI BAGIAN INI DI THEME KAMU
nodeIcon: `text-surface-500 dark:text-surface-400 group-p-selected:text-primary shrink-0`,
    nodeLabel: ``, 
    pcNodeCheckbox: {
    root: {
        class: [
            'relative inline-flex align-bottom select-none',
            'size-4' // Ukuran root
        ]
    },
    input: {
        class: [
            'peer appearance-none absolute inset-0 z-10 m-0 p-0',
            'w-full h-full cursor-pointer opacity-0'
        ]
    },
    box: ({ props, context }: any) => ({
        class: [
            // Layout & Shape
            'flex items-center justify-center',
            'size-4 rounded-sm border', // 'rounded-sm' sesuai style kamu
            'transition-colors duration-200',

            // Default Colors (Unchecked)
            {
                'bg-surface-0 dark:bg-surface-950': !context.checked && !context.partialChecked,
                'border-surface-300 dark:border-surface-200': !context.checked && !context.partialChecked,
                'dark:border-white/20': !context.checked && !context.partialChecked
            },

            // Checked / Partial Checked States
            {
                'bg-primary-600 text-white dark:bg-primary-600 border-primary dark:border-primary-600': context.checked || context.partialChecked,
            },

            // Hover States
            {
                'peer-hover:border-surface-400 dark:peer-hover:border-surface-600': !props.disabled && !context.checked && !context.partialChecked,
                'peer-hover:bg-primary-emphasis peer-hover:border-primary-emphasis dark:peer-hover:bg-primary-500 dark:peer-hover:border-primary-500': !props.disabled && (context.checked || context.partialChecked)
            },

            // Focus State
            'peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary',

            // Disabled State
            {
                'opacity-50 bg-surface-200 dark:bg-surface-700 cursor-default pointer-events-none': props.disabled
            }
        ]
    }),
    icon: {
        class: [
            'size-3.5 shrink-0',
            'text-white' // Warna stroke ikon
        ]
    }
},
    nodeChildren: `flex flex-col list-none m-0 gap-1 pt-1 ps-6`,
    mask: `bg-black/50 text-surface-200 absolute z-10 flex items-center justify-center`,
    loadingIcon: `text-[2rem] h-8 w-8`
});
</script>