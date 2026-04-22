
<template>
    <DocsCard>
        <UFloatLabel>
            <UTextarea id="over_label" v-model="value1" rows="5" cols="30" style="resize: none" />
            <label for="over_label">Over Label</label>
        </UFloatLabel>

        <UFloatLabel variant="in">
            <UTextarea id="in_label" v-model="value2" rows="5" cols="30" style="resize: none" />
            <label for="in_label">In Label</label>
        </UFloatLabel>

        <UFloatLabel variant="on">
            <UTextarea id="on_label" v-model="value3" rows="5" cols="30" style="resize: none" />
            <label for="on_label">On Label</label>
        </UFloatLabel>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
</script>
