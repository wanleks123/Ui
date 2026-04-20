<template>
    <DocsCard>
        <UButton 
            type="button" 
            icon="i-ph-dots-three-vertical" 
            @click="toggle" 
            aria-haspopup="true" 
            aria-controls="overlay_menu" 
        />
        <UMenu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();

// Sesuaikan icon dengan prefix i-ph-
const items = ref([
    [
        {
            label: 'Refresh',
            icon: 'i-ph-arrows-counter-clockwise'
        },
        {
            label: 'Export',
            icon: 'i-ph-export'
        }
    ]
]);

const toggle = (event) => {
    // Pastikan komponen UMenu yang kamu gunakan memang memiliki method toggle
    // Jika menggunakan Nuxt UI asli, UMenu biasanya dikontrol lewat state atau Dropdown
    menu.value?.toggle(event);
};
</script>