
<template>
    <DocsCard>
        <UOrganizationChart :value="data">
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </UOrganizationChart>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";
import { Doc } from "zod/v4/core";

const data = ref({
    label: 'Argentina',
    children: [
        {
            label: 'Argentina',
            children: [
                {
                    label: 'Argentina'
                },
                {
                    label: 'Croatia'
                }
            ]
        },
        {
            label: 'France',
            children: [
                {
                    label: 'France'
                },
                {
                    label: 'Morocco'
                }
            ]
        }
    ]
});
</script>
