
<template>
    <DocsCard>
        <UToolbar>
            <template #start>
                <UButton icon="ph:plus" class="mr-2" severity="secondary" text />
                <UButton icon="ph:printer" class="mr-2" severity="secondary" text />
                <UButton icon="ph:upload" severity="secondary" text />
            </template>

            <template #center>
    <UIconField class="relative flex items-center">
        
        <UInputIcon class="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-surface-500 dark:text-surface-400">
            <Icon name="ph:magnifying-glass" size="18" />
        </UInputIcon>

        <UInputText placeholder="Search" class="pl-10 w-full" />
        
    </UIconField>
</template>

            <template #end> <USplitButton label="Save" :model="items"></USplitButton></template>
        </UToolbar>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'ph:arrow-clockwise'
    },
    {
        label: 'Delete',
        icon: 'ph:trash'
    }
])
</script>
