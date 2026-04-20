
<template>
    <DocsCard>
        <UBreadcrumb :home="home" :model="items" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'ph:house',
});
const items = ref([
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
]);
</script>
