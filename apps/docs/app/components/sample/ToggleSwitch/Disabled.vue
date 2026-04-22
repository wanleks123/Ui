
<template>
    <DocsCard>
        <UToggleSwitch v-model="checked" disabled />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
