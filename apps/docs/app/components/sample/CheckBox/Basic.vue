
<template>
    <DocsCard>
        <UCheckbox v-model="checked" binary />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
