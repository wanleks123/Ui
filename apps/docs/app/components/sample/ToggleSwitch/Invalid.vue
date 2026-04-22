
<template>
    <DocsCard>
        <UToggleSwitch v-model="checked" :invalid="!checked" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
