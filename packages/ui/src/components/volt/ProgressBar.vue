<template>
    <ProgressBar
        unstyled
        v-bind="$attrs"
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ProgressBar>
</template>

<script setup lang="ts">
import ProgressBar, { type ProgressBarPassThroughOptions, type ProgressBarProps } from 'primevue/progressbar';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ProgressBarProps {}
defineProps<Props>();

defineOptions({ inheritAttrs: false });

const theme = ref<ProgressBarPassThroughOptions>({
    root: ({ props }) => ({
        class: [
            'relative overflow-hidden h-5 w-full bg-surface-200 dark:bg-surface-700 rounded-md',
            // Jika indeterminate, kita jadikan root sebagai kontainer animasinya langsung
            { 'animate-indeterminate-root': props.mode === 'indeterminate' }
        ]
    }),
    value: ({ props }) => ({
        class: [
            'absolute top-0 left-0 bottom-0',
            // Hanya tampilkan bar biru statis jika mode-nya BUKAN indeterminate
            props.mode !== 'indeterminate' 
                ? 'bg-primary transition-[width] duration-1000 ease-in-out flex items-center justify-center' 
                : 'hidden' // Sembunyikan elemen value bawaan saat indeterminate agar tidak bentrok
        ]
    }),
    label: 'text-primary-contrast text-xs font-semibold px-2 inline-flex items-center justify-center h-full'
});
</script>

<style scoped>
/* Kita pasang animasinya di pseudo-element milik ROOT */
.animate-indeterminate-root::before,
.animate-indeterminate-root::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    /* PAKSA WARNA BIRU STANDAR (Ganti ke hex warna primarimu jika perlu) */
    background-color: #3b82f6; 
}

/* Gunakan variable prime jika ada */
:root {
    --p-primary-color: #3b82f6;
}

.animate-indeterminate-root::before {
    animation: p-indeterminate-1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.animate-indeterminate-root::after {
    animation: p-indeterminate-2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-indeterminate-1 {
    0% { left: -35%; right: 100%; }
    60% { left: 100%; right: -90%; }
    100% { left: 100%; right: -90%; }
}

@keyframes p-indeterminate-2 {
    0% { left: -200%; right: 100%; }
    60% { left: 107%; right: -8%; }
    100% { left: 107%; right: -8%; }
}
</style>