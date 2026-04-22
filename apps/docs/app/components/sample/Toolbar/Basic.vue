
<template>
    <DocsCard>
        <UToolbar>
            <template #start>
                <UButton icon="pi pi-plus" class="mr-2" severity="secondary" text />
                <UButton icon="pi pi-print" class="mr-2" severity="secondary" text />
                <UButton icon="pi pi-upload" severity="secondary" text />
            </template>

            <template #center>
                <UIconField>
                    <UInputIcon>
                        <i class="pi pi-search" />
                    </UInputIcon>
                    <UInputText placeholder="Search" />
                </UIconField>
            </template>

            <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
        </UToolbar>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    }
])
</script>
