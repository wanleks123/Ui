
<template>
    <DocsCard>
        <div class="flex justify-center gap-2">
            <UCheckbox v-model="checked1" binary disabled />
            <UCheckbox v-model="checked2" binary disabled />
        </div>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(true);
</script>
