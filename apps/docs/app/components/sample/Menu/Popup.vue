<template>
    <DocsCard>
        <UButton 
            type="button" 
            icon="ph:dots-three-vertical" 
            @click="toggle" 
            aria-haspopup="true" 
            aria-controls="overlay_menu" 
            color="gray"
            variant="ghost"
        />

        <UMenu 
            ref="menu" 
            id="overlay_menu" 
            :model="items" 
            :popup="true" 
        />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

// Mendefinisikan ref untuk komponen menu
const menu = ref(null);

const items = ref([
    {
        label: 'Refresh',
        icon: 'ph:arrows-counter-clockwise',
        command: () => {
            console.log('Refreshing...');
        }
    },
    {
        label: 'Export',
        icon: 'ph:export',
        command: () => {
            console.log('Exporting...');
        }
    }
]);

// Fungsi untuk menampilkan/menyembunyikan menu
const toggle = (event) => {
    // Memanggil method toggle bawaan dari library UI
    if (menu.value) {
        menu.value.toggle(event);
    }
};
</script>