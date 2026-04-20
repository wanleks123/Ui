
<template>
    <DocsCard>
        <UIftaLabel class="w-full md:w-80">
            <UMultiSelect v-model="selectedCities" inputId="ms_cities" :options="cities" optionLabel="name" filter :maxSelectedLabels="3" class="w-full"variant="filled" />
            <label for="ms_cities">Cities</label>
        </UIftaLabel>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
