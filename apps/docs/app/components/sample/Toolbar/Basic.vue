
<template>
    <DocsCard>
        <UToolbar>
            <template #start>
                <UButton icon="ph:plus" class="mr-2" severity="secondary" text />
                <UButton icon="ph:print" class="mr-2" severity="secondary" text />
                <UButton icon="ph:upload" severity="secondary" text />
            </template>

            <template #center>
                <UIconField>
                    <UInputIcon>
                        <i class="ph:search" />
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
        icon: 'ph:refresh'
    },
    {
        label: 'Delete',
        icon: 'ph:times'
    }
])
</script>
