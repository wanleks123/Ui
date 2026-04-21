
<template>
    <DocsCard>
         <UPassword v-model="value" toggleMask />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
