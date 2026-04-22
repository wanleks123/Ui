
<template>
    <DocsCard>
        <UTextarea v-model="value" rows="5" cols="30" disabled />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Disabled');
</script>
