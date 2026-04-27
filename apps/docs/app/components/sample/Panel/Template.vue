
<template>
    <DocsCard>
        <Toast />
        <UPanel toggleable>
            <template #header>
                <div class="flex items-center gap-2">
                    <UAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <UButton icon="ph:user" rounded text></UButton>
                        <UButton icon="ph:bookmark" severity="secondary" rounded text></UButton>
                    </div>
                    <span class="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <UButton icon="ph:cog" severity="secondary" rounded text @click="toggle" />
                <UMenu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </UPanel>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu';

const menu = ref(null);
const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Refresh',
        icon: 'ph:refresh'
    },
    {
        label: 'Search',
        icon: 'ph:search'
    },
    {
        separator: true
    },
    {
        label: 'Delete',
        icon: 'ph:times'
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
</script>
