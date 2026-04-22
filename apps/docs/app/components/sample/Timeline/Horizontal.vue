
<template>
    <DocsCard>
        <UTimeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </UTimeline>

        <UTimeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </UTimeline>
        <UTimeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </UTimeline>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const events = ref(['2020', '2021', '2022', '2023']);
</script>
