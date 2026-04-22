
<template>
    <DocsCard>
        <UTextarea v-model="value" rows="5" fluid />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
