
<template>
    <DocsCard>
        <UIftaLabel>
            <UTextarea id="description" v-model="value" rows="5" cols="30" style="resize: none" />
            <label for="description">Description</label>
        </UIftaLabel>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
