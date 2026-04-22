<template>
    <DocsCard>
        <UTimeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <UCard class="mt-4">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm mb-3" />
                        <p class="text-surface-600 dark:text-surface-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse.
                        </p>
                        <UButton label="Read more" variant="text" class="p-0 mt-3"></UButton>
                    </template>
                </UCard>
            </template>
        </UTimeline>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>

<style scoped>
/* Pakai CSS biasa + :deep() supaya Vite Builder nggak berat */
@media screen and (max-width: 960px) {
    :deep(.customized-timeline .p-timeline-event:nth-child(even)) {
        flex-direction: row !important;
    }

    :deep(.customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content) {
        text-align: left !important;
    }

    :deep(.customized-timeline .p-timeline-event-opposite) {
        flex: 0 !important;
        display: none;
    }
}
</style>