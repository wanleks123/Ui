<template>
    <Tag
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #icon="slotProps">
            <Icon 
                v-if="icon" 
                :name="icon" 
                iconSize="20"
                :class="slotProps.class" 
            />
        </template>

        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Tag>
</template>

<script setup lang="ts">
import Tag, { type TagPassThroughOptions, type TagProps } from 'primevue/tag';
import { ref } from 'vue';
import { Icon } from '#components'; // Wajib diimport untuk library @unimma/ui
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TagProps {
    icon?: string; // Menerima nama icon seperti 'ph:shopping-cart'
}
defineProps<Props>();

const theme = ref<TagPassThroughOptions>({
    root: ({ props }: any) => [
        'inline-flex items-center justify-center text-xs font-bold py-0.5 px-2 rounded-md gap-1',
        { 'rounded-2xl': props.rounded },
        // Warna Berdasarkan Severity
        props.severity === 'success' ? 'bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-300' :
        props.severity === 'info' ? 'bg-sky-100 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300' :
        props.severity === 'warn' ? 'bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-300' :
        props.severity === 'danger' ? 'bg-red-100 dark:bg-red-500/15 text-red-700 dark:text-red-300' :
        props.severity === 'secondary' ? 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300' :
        props.severity === 'contrast' ? 'bg-surface-950 dark:bg-surface-0 text-surface-0 dark:text-surface-950' :
        'bg-primary-100 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300' // Default Primary
    ],
    // Styling untuk pembungkus icon
    icon: 'w-3.5 h-3.5 shrink-0'
});
</script>