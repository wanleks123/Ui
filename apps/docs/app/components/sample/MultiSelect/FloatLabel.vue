
<template>
    <DocsCard>
        <UFloatLabel class="w-full md:w-80">
            <UMultiSelect id="over_label" v-model="value1" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" />
            <label for="over_label">Over Label</label>
        </UFloatLabel>

        <UFloatLabel class="w-full md:w-80" variant="in">
            <UMultiSelect id="in_label" v-model="value2" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" variant="filled" />
            <label for="in_label">In Label</label>
        </UFloatLabel>

        <UFloatLabel class="w-full md:w-80" variant="on">
            <UMultiSelect id="on_label" v-model="value3" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full" />
            <label for="on_label">On Label</label>
        </UFloatLabel>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
