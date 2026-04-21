
<template>
    <DocsCard>
        <UProgressBar :value="40">
            {{ value }}/100
        </UProgressBar>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref(40);
</script>
