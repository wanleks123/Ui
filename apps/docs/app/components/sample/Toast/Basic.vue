
<template>
    <DocsCard>
        <UToast />
        <UButton label="Show" @click="show()" />
    </DocsCard>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>
