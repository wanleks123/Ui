
<template>
    <DocsCard>
        <UPassword v-model="value" :feedback="false" showClear inputClass="w-56" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';
import { Doc } from 'zod/v4/core';

const value = ref(null);
</script>
