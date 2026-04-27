
<template>
    <DocsCard>
        <UListbox v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-56" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex items-center">
                   <Icon :name="`flag:${slotProps.option.code.toLowerCase()}-4x3`" class="me-2" :style="{ width: '18px' }" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </UListbox>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const groupedCities = ref([
    {
        label: 'Germany',
        code: 'de',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'us',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'jp',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
]);
</script>
