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

<script setup lang="ts">
import AccordionPanel, { type AccordionPanelPassThroughOptions, type AccordionPanelProps } from 'primevue/accordionpanel';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionPanelProps {}
defineProps<Props>();

const theme = ref<AccordionPanelPassThroughOptions>({
    root: 'relative flex flex-col'
});
</script>