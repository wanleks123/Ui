
<template>
   <DocsCard>
        <UFloatLabel>
            <UPassword v-model="value1" inputId="over_label" />
            <label for="over_label">Over Label</label>
        </UFloatLabel>

        <UFloatLabel variant="in">
            <UPassword v-model="value2" inputId="in_label" variant="filled" />
            <label for="in_label">In Label</label>
        </UFloatLabel>

        <UFloatLabel variant="on">
            <UPassword v-model="value3" inputId="on_label" />
            <label for="on_label">On Label</label>
        </UFloatLabel>
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>
