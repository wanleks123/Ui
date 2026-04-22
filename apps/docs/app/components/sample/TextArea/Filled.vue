
<template>
    <DocsCard>
        <UTextarea v-model="value" variant="filled" rows="5" cols="30" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
