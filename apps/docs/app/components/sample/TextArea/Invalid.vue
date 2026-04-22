
<template>
    <DocsCard>
        <UTextarea v-model="value" rows="5" cols="30" :invalid="!value" style="resize: none" placeholder="Address" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
