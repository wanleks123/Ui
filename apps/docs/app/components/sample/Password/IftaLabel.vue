
<template>
    <DocsCard>
        <UIftaLabel>
            <UPassword 
            v-model="value" 
            inputId="password" 
            variant="filled" />
            <label for="password">Password</label>
        </UIftaLabel>
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';
import { ref } from 'vue';

const value = ref(null);
</script>
