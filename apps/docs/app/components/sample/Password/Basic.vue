
<template>
    <DocsCard>
        <UPassword v-model="value" :feedback="false" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
