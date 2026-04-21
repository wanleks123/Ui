
<template>
    <DocsCard>
        <UPassword v-model="value1" size="small" placeholder="Small" />
        <UPassword v-model="value2" placeholder="Normal" />
        <UPassword v-model="value3" size="large" placeholder="Large" />
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>
