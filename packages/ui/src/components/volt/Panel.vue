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
            'rounded-lg shadow-sm overflow-hidden', // overflow-hidden agar border-radius konsisten
            'bg-surface-0 dark:bg-surface-800/50',
            'border border-surface-200 dark:border-white/10',
            'text-surface-700 dark:text-surface-0',
            'w-full' // Kunci lebar penuh
        ]
    },
    header: ({ props }: any) => ({
        class: [
            'flex items-center justify-between',
            'px-5 py-4 sm:px-6', // Padding simetris
            'bg-transparent',
            'border-b border-transparent', // Placeholder agar tidak goyang saat ganti state
            { 'cursor-pointer select-none': props.toggleable }
        ]
    }),
    title: {
        class: 'text-base font-bold text-surface-900 dark:text-white'
    },
    headerActions: {
        class: 'flex items-center'
    },
    contentContainer: {
        class: 'transition-[grid-template-rows] duration-300 ease-in-out'
    },
    content: {
        class: [
            'px-5 pb-5 sm:px-6 sm:pb-6', // Padding hanya di samping dan bawah
            'text-sm text-surface-600 dark:text-surface-400',
            'leading-relaxed'
        ]
    },
    footer: {
        class: 'px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-0'
    },
    transition: {
        // Menggunakan teknik grid untuk animasi smooth tanpa 'jumpy' lebar/tinggi
        enterFromClass: 'grid-rows-[0fr] opacity-0',
        enterActiveClass: 'transition-all duration-300 ease-in-out display-grid',
        enterToClass: 'grid-rows-[1fr] opacity-100',
        leaveFromClass: 'grid-rows-[1fr] opacity-100',
        leaveActiveClass: 'transition-all duration-300 ease-in-out display-grid',
        leaveToClass: 'grid-rows-[0fr] opacity-0'
    }
});
</script>