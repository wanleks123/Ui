<template>
    <DocsCard>
        <UBreadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer flex items-center" :href="item.url">
                    <Icon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
                </a>
            </template>
            <template #separator> / </template>
        </UBreadcrumb>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

// Mengubah semua class PrimeIcons (pi) menjadi string Nuxt Icon Phosphor (ph)
// Ganti titik dua (:) menjadi strip (-) dan tambahkan i- di depannya
const home = ref({ icon: 'ph:house' });
const items = ref([
    { icon: 'ph:tree-structure' }, 
    { icon: 'ph:book' }, 
    { icon: 'ph:wallet' }, 
    { icon: 'ph:shopping-cart' }, 
    { icon: 'ph:calculator' }
]);
</script>