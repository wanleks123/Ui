
<template>
    <DocsCard>
        <UListbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full md:w-56" listStyle="max-height:250px">
            <template #option="slotProps">
                <div class="flex items-center">
                    <Icon :name="`flag:${slotProps.option.code.toLowerCase()}-4x3`" class="me-2" :style="{ width: '18px' }" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </UListbox>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'au' },
    { name: 'Brazil', code: 'br' },
    { name: 'China', code: 'cn' },
    { name: 'Egypt', code: 'eg' },
    { name: 'France', code: 'fr' },
    { name: 'Germany', code: 'de' },
    { name: 'India', code: 'in' },
    { name: 'Japan', code: 'jp' },
    { name: 'Spain', code: 'es' },
    { name: 'United States', code: 'us' }
]);
</script>
