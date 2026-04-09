<template>
    <Timeline
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #content="slotProps">
            <div class="flex flex-col min-w-0">
                <span :class="[
                    'text-sm font-medium transition-colors duration-200',
                    slotProps.item.status === 'current' ? 'text-primary-600 dark:text-primary-400' : 
                    slotProps.item.status === 'complete' ? 'text-surface-900 dark:text-white' : 'text-surface-500 dark:text-surface-400'
                ]">
                    {{ slotProps.item.name }}
                </span>
                <span class="text-sm text-surface-500 dark:text-surface-400">
                    {{ slotProps.item.description }}
                </span>
            </div>
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Timeline>
</template>

<script setup lang="ts">
import Timeline, { type TimelinePassThroughOptions, type TimelineProps } from 'primevue/timeline';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TimelineProps {}
defineProps<Props>();

const theme = ref<TimelinePassThroughOptions>({
    root: 'flex flex-col grow p-horizontal:flex-row',
    event: ({ props, context }: any) => ({
        class: [
            'flex relative min-h-[5rem] last:min-h-0',
            {
                'flex-row-reverse': props.align === 'right',
                'flex-col flex-1 last:flex-none': props.layout === 'horizontal'
            },
            // Spacing between steps
            'pb-10 last:pb-0'
        ]
    }),
    eventOpposite: 'hidden', // Standard progress trackers usually hide the opposite side
    eventSeparator: 'flex flex-col items-center flex-none',
    eventMarker: ({ context }: any) => {
        const status = context.item?.status;
        return {
            class: [
                'relative z-10 flex size-8 items-center justify-center rounded-full border-2 transition-all duration-200',
                // Complete State
                { 'bg-primary-600 border-primary-600 dark:bg-primary-500 dark:border-primary-500': status === 'complete' },
                // Current State
                { 'bg-surface-0 border-primary-600 dark:bg-surface-900 dark:border-primary-500': status === 'current' },
                // Upcoming State
                { 'bg-surface-0 border-surface-300 dark:bg-surface-900 dark:border-white/15': status === 'upcoming' || !status },
                
                // Inner indicator logic via before/after
                status === 'current' ? 'before:size-2.5 before:rounded-full before:bg-primary-600 dark:before:bg-primary-500' : '',
                status === 'complete' ? 'after:content-["✓"] after:text-white after:font-bold after:text-sm' : ''
            ]
        };
    },
    eventConnector: ({ context }: any) => {
        const status = context.item?.status;
        return {
            class: [
                'grow w-0.5 mt-0.5 -ml-px transition-colors duration-300',
                // Line is colored if the CURRENT step is complete
                status === 'complete' ? 'bg-primary-600 dark:bg-primary-500' : 'bg-surface-300 dark:bg-white/15'
            ]
        };
    },
    eventContent: 'flex-1 px-4 pt-1.5'
});
</script>