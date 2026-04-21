
<template>
    <DocsCard>
        <UPassword v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';
import { ref } from 'vue';

const value = ref(null);
</script>
