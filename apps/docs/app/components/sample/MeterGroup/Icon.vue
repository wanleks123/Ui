
<template>
    <DocsCard>
        <UMeterGroup :value="value" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color: '#34d399', value: 16, icon: 'ph:table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'ph:inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'ph:image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'ph:cog' }
]);
</script>
