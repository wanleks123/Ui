
<template>
    <DocsCard>
        <UMeterGroup :value="value" labelPosition="start" labelOrientation="vertical" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 }
]);
</script>
