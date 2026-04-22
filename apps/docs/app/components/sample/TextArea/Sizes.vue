
<template>
    <DocsCard>
        <UTextarea v-model="value1" size="small" placeholder="Small" rows="3" />
        <UTextarea v-model="value2" placeholder="Normal" rows="3" />
        <UTextarea v-model="value3" size="large" placeholder="Large" rows="3" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>
