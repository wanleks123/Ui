
<template>
    <DocsCard>
        <UOrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="single">
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`w-2rem flag flag-${slotProps.node.data}`" />
                    <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </UOrganizationChart>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const selection = ref({});
const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
                }
            ]
        }
    ]
});
</script>
