
<template>
    <DocsCard>
        <UButton label="Show" @click="showMessage" :disabled="visible" class="mb-4" />
        <UMessage v-if="visible" severity="success" :life="3000">Auto Disappear Message</UMessage>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

let visible = ref(false);

const showMessage = () => {
    visible.value = true;

    setTimeout(() => {
        visible.value = false;
    }, 3500);
}
</script>
