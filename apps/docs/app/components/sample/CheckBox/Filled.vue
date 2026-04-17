
<template>
    <DocsCard>
        <UCheckbox v-model="checked" binary variant="filled" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
