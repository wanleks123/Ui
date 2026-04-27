
<template>
    <DocsCard>
        <UTabs value="/dashboard">
            <UTabList>
                <UTab v-for="tab in items" :key="tab.label" :value="tab.route">
                    <router-link v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <a v-ripple :href="href" @click="navigate" class="flex items-center gap-2 text-inherit">
                            <i :class="tab.icon" />
                            <span>{{ tab.label }}</span>
                        </a>
                    </router-link>
                </UTab>
            </UTabList>
        </UTabs>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { route: '/dashboard', label: 'Dashboard', icon: 'ph:home' },
    { route: '/transactions', label: 'Transactions', icon: 'ph:chart-line' },
    { route: '/products', label: 'Products', icon: 'ph:list' },
    { route: '/messages', label: 'Messages', icon: 'ph:inbox' }
]);
</script>
