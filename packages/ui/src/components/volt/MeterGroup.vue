<template>
    <MeterGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </MeterGroup>
</template>

<script setup lang="ts">
import MeterGroup, { type MeterGroupPassThroughOptions, type MeterGroupProps } from 'primevue/metergroup';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ MeterGroupProps {}
defineProps<Props>();

const theme = ref<MeterGroupPassThroughOptions>({
    // Root: Mengatur arah antara meteran dan daftar label
    root: ({ props }: any) => ({
        class: [
            'flex gap-8',
            props.orientation === 'horizontal' ? 'flex-col' : 'flex-row items-start h-64'
        ]
    }),

    // Meters: Track utama (wadah batang)
    meters: ({ props }: any) => ({
        class: [
            'flex bg-surface-200 dark:bg-surface-800 rounded-full overflow-hidden shrink-0',
            props.orientation === 'horizontal' ? 'h-2 w-full' : 'flex-col w-2 h-full'
        ]
    }),

    // Meter: Batang warna-warni
    meter: ({ props }: any) => ({
        class: [
            'transition-all duration-500',
            props.orientation === 'horizontal' ? 'h-full' : 'w-full'
        ]
    }),

    // LabelList: INI BAGIAN YANG MEMBUAT LABEL MENURUN
    labelList: ({ props }: any) => ({
        class: [
            'flex m-0 p-0 list-none gap-4',
            // Jika horizontal -> mendatar (row), jika vertical -> menurun (col)
            props.orientation === 'horizontal' ? 'flex-row items-center flex-wrap' : 'flex-col items-start'
        ]
    }),

    label: 'inline-flex items-center gap-3',
    
    labelMarker: 'inline-flex w-2.5 h-2.5 rounded-full shrink-0',
    
    labelText: 'text-sm font-medium text-surface-700 dark:text-surface-300',
    
    labelIcon: 'text-sm w-4 h-4'
});
</script>