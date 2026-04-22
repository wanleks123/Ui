
<template>
    <DocsCard>
        <UToast position="top-left" group="tl" />
        <UToast position="bottom-left" group="bl" />
        <UToast position="bottom-right" group="br" />

        <div class="flex flex-wrap gap-2">
            <UButton label="Top Left" @click="showTopLeft" />
            <UButton label="Bottom Left" @click="showBottomLeft" />
            <UButton label="Bottom Right" @click="showBottomRight" />
        </div>
    </DocsCard>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};
</script>
