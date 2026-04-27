
<template>
    <DocsCard>
        <UTimeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </UTimeline>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'ph:shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'ph:gear', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'ph:truck', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'ph:check', color: '#607D8B' }
]);

</script>
