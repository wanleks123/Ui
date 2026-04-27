
<template>
    <DocsCard>
        <UMenu :model="items" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'ph:plus'
            },
            {
                label: 'Search',
                icon: 'ph:magnifying-glass'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'ph:gear'
            },
            {
                label: 'Logout',
                icon: 'ph:sign-out'
            }
        ]
    }
]);
</script>
