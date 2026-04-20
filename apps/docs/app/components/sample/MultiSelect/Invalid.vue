
<template>
    <DocsCard>
        <div class="flex flex-wrap justify-center gap-4">
            <UMultiSelect v-model="selectedCities1" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                    :maxSelectedLabels="3" :invalid="selectedCities1?.length === 0" class="w-full md:w-80" />
            <UMultiSelect v-model="selectedCities2" :options="cities" optionLabel="name" filter placeholder="Select Cities" 
                    :maxSelectedLabels="3" :invalid="selectedCities2?.length === 0" class="w-full md:w-80" variant="filled" />
        </div>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCities1 = ref([]);
const selectedCities2 = ref([]);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
