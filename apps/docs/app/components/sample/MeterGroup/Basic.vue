
<template>
    <DocsCard>
        <UMeterGroup :value="value" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref([{ label: 'Space used', value: 15, color: 'var(--p-primary-color)' }]);
</script>
