
<template>
    <DocsCard>
        <UMultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
