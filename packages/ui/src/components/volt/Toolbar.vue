<template>
    <Toolbar
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Toolbar>
</template>

<script setup lang="ts">
import Toolbar, { type ToolbarPassThroughOptions, type ToolbarProps } from 'primevue/toolbar';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToolbarProps {}
defineProps<Props>();

const theme = ref<ToolbarPassThroughOptions>({
    root: [
        // Layout: w-full untuk lebar penuh
        'flex items-center justify-between flex-wrap gap-4 px-6 py-4 w-full',
        
        // Background & Text (Tailwind Plus style)
        'bg-white dark:bg-slate-900',
        'text-slate-900 dark:text-slate-100',
        
        // Border & Shadow
        // Jika menempel di paling atas layar, hilangkan 'border-x' dan 'rounded'
        'border-b border-slate-200 dark:border-slate-800', 
        'shadow-sm',
        
        // Efek Glassmorphism
        'backdrop-blur-md bg-white/80 dark:bg-slate-900/80 sticky top-0 z-50'
    ],
    start: 'flex items-center gap-4',
    center: 'flex items-center gap-4',
    end: 'flex items-center gap-4'
});
</script>