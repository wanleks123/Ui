
<template>
    <DocsCard>
        <UPassword v-model="value" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
