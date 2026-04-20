
<template>
    <DocsCard>
        <UListbox v-model="selectedCity" disabled :options="cities" optionLabel="name" class="w-full md:w-56" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
