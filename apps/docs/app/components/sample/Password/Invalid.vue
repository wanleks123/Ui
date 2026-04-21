
<template>
    <DocsCard>
        <UPassword v-model="value1" :invalid="!value1" placeholder="Password" />
        <UPassword v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
</script>
