<template>
    <Panel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #togglebutton="{ collapsed, toggleCallback, keydownCallback }">
            <SecondaryButton variant="text" rounded @click="toggleCallback" @keydown="keydownCallback">
                <template #icon>
                    <PlusIcon v-if="collapsed" />
                    <MinusIcon v-else />
                </template>
            </SecondaryButton>
        </template>
        
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Panel>
</template>

<script setup lang="ts">
import MinusIcon from '@primevue/icons/minus';
import PlusIcon from '@primevue/icons/plus';
import Panel, { type PanelPassThroughOptions, type PanelProps } from 'primevue/panel';
import { ref } from 'vue';
import SecondaryButton from './SecondaryButton.vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ PanelProps {}
defineProps<Props>();

const theme = ref<PanelPassThroughOptions>({
    root: {
        class: [
            'rounded-lg shadow-sm',
            'bg-surface-0 dark:bg-surface-800/50',
            'border border-surface-200 dark:border-white/10',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    header: ({ props }: any) => ({
        class: [
            'flex items-center justify-between',
            'bg-transparent',
            // Matching the px-4 py-5 sm:p-6 container logic
            'px-4 pt-5 sm:px-6 sm:pt-6 pb-0',
            { 'cursor-pointer select-none': props.toggleable }
        ]
    }),
    title: {
        class: 'text-base font-semibold text-surface-900 dark:text-white leading-none'
    },
    headerActions: {
        class: 'flex items-center gap-2'
    },
    contentContainer: {
        class: 'transition-all duration-300'
    },
    content: {
        class: [
            'px-4 pb-5 sm:px-6 sm:pb-6 pt-5', // Internal padding for the body
            'text-sm text-surface-600 dark:text-surface-400'
        ]
    },
    footer: {
        class: 'px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-0'
    },
    transition: {
        enterFromClass: 'max-h-0 opacity-0',
        enterActiveClass: 'overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out',
        enterToClass: 'max-h-[1000px] opacity-100',
        leaveFromClass: 'max-h-[1000px] opacity-100',
        leaveActiveClass: 'overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
        leaveToClass: 'max-h-0 opacity-0'
    }
});
</script>