<template>
    <Timeline
        unstyled
        :pt="theme"
        :pt-options="{
            mergeProps: ptViewMerge
        }"
        v-bind="$attrs"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Timeline>
</template>

<script setup lang="ts">
import Timeline, { type TimelinePassThroughOptions, type TimelineProps } from 'primevue/timeline';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

// Menggunakan interface asli dari PrimeVue untuk kompatibilitas penuh
interface Props extends /* @vue-ignore */ TimelineProps {}
defineProps<Props>();

/**
 * Theme Definition menggunakan Tailwind Utility Classes
 * Menggunakan prefix p-* untuk menangani state orientasi dan alignment PrimeVue
 */
const theme = ref<TimelinePassThroughOptions>({
    root: {
        class: [
            'flex flex-col flex-grow',
            'p-horizontal:flex-row'
        ]
    },
    event: {
        class: [
            'group flex relative min-h-[5rem] last:min-h-0',
            'p-right:flex-row-reverse',
            'p-horizontal:flex-col p-horizontal:flex-1 p-horizontal:last:flex-none',
            'p-bottom:flex-col-reverse',
            'p-vertical:p-alternate:even:flex-row-reverse',
            'p-horizontal:p-alternate:even:flex-col-reverse'
        ]
    },
    eventOpposite: {
        class: [
            'flex-1',
            'p-left:text-right p-right:text-left',
            'p-vertical:py-0 p-vertical:px-4 p-vertical:leading-none',
            'p-vertical:p-alternate:group-odd:text-right p-vertical:p-alternate:group-even:text-left',
            'p-horizontal:py-4 p-horizontal:px-0'
        ]
    },
    eventSeparator: {
        class: 'flex-none flex flex-col items-center p-horizontal:flex-row'
    },
    eventMarker: {
        class: [
            'inline-flex items-center justify-center relative self-baseline',
            'w-4.5 h-4.5 border-2 rounded-full',
            'border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            // Inner Circle (Primary)
            'before:rounded-full before:w-1.5 before:h-1.5 before:bg-primary',
            // Shadow Effect
            'after:absolute after:w-full after:h-full after:rounded-full',
            'after:shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.12)]',
            'p-horizontal:flex-row'
        ]
    },
    eventConnector: {
        class: [
            'flex-grow bg-surface-200 dark:bg-surface-700',
            'p-vertical:w-[2px]',
            'p-horizontal:w-full p-horizontal:h-[2px]'
        ]
    },
    eventContent: {
        class: [
            'flex-1',
            'p-left:text-left p-right:text-right',
            'p-vertical:py-0 p-vertical:px-4 p-vertical:leading-none',
            'p-vertical:p-alternate:group-odd:text-left p-vertical:p-alternate:group-even:text-right',
            'p-horizontal:py-4 p-horizontal:px-0'
        ]
    }
});
</script>