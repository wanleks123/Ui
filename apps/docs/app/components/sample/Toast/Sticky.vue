
<template>
    <DocsCard>
        <UToast />
        <div class="flex flex-wrap gap-2">
            <UButton @click="showSticky" label="Sticky" />
            <UButton label="Clear" severity="secondary" @click="clear()" />
        </div>
    </DocsCard>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
}

const clear = () => {
    toast.removeAllGroups();
}
</script>
