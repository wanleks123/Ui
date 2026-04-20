
<template>
    <DocsCard>
        <UMultiSelect v-model="value1" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="small" placeholder="Small" />
        <UMultiSelect v-model="value2" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" placeholder="Normal" />
        <UMultiSelect v-model="value3" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-80" size="large" placeholder="Large" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

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
