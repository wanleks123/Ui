<template>
    <DocsCard>
    <UToast />
    
    <UConfirmDialog group="positioned">
        <template #icon>
            <Icon name="ph:info-bold" class="text-4xl text-primary" />
        </template>
    </UConfirmDialog>

    <div class="card">
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('left')" label="Left" severity="secondary" style="min-width: 10rem" >
                <template #icon><Icon name="ph:arrow-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('right')" label="Right" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('topleft')" label="TopLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('top')" label="Top" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down" /></template>
            </UButton>
            <UButton @click="confirmPosition('topright')" label="TopRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
            <UButton @click="confirmPosition('bottomleft')" label="BottomLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottom')" label="Bottom" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottomright')" label="BottomRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-left" /></template>
            </UButton>
        </div>
    </div>
    </DocsCard>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positioned',
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        // Hapus properti icon di sini karena sudah ditangani oleh template #icon di UConfirmDialog
        position: position,
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            text: true
        },
        acceptProps: {
            label: 'Save',
            text: true
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        }
    });
};
</script>
