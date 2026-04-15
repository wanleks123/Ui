<script setup lang="ts">
import AccordionPanel, { type AccordionPanelPassThroughOptions, type AccordionPanelProps } from 'primevue/accordionpanel';
import { computed } from 'vue'; // Gunakan computed agar reaktif
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionPanelProps {}
const props = defineProps<Props>(); // Ambil props agar bisa cek props.disabled

const theme = computed<AccordionPanelPassThroughOptions>(() => ({
    root: [
        'relative flex flex-col',
        // Jika disabled, tambahkan class Tailwind untuk warna abu-abu
        { 
            'opacity-60 bg-gray-100 cursor-not-allowed': props.disabled 
        }
    ]
}));
</script>

<template>
    <AccordionPanel
        unstyled
        v-bind="$props"
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <slot></slot>
    </AccordionPanel>
</template>