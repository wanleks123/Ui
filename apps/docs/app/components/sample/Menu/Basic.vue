
<template>
    <DocsCard>
        <UMenu :model="items" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'ph:plus' },
    { label: 'Search', icon: 'ph:search' }
]);
</script>
