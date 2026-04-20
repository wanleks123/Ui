<template>
    <DocsCard>
        <UBreadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer flex items-center" :href="item.url">
                    <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
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
const home = ref({ icon: 'i-ph-house' });
const items = ref([
    { icon: 'i-ph-tree-structure' }, 
    { icon: 'i-ph-book' }, 
    { icon: 'i-ph-wallet' }, 
    { icon: 'i-ph-shopping-bag' }, 
    { icon: 'i-ph-calculator' }
]);
</script>