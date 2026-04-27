
<template>
    <DocsCard>
        <UBreadcrumb :home="home" :model="items">
           <template #item="{ item, props }">
    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate" class="flex items-center gap-2">
            <Icon v-if="item.icon" :icon="item.icon" class="w-5 h-5 text-surface-700 dark:text-surface-0" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
    </router-link>
    
    <a v-else :href="item.url" :target="item.target" v-bind="props.action" class="flex items-center gap-2">
        <Icon v-if="item.icon" :icon="item.icon" class="w-5 h-5 text-surface-700 dark:text-surface-0" />
        <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
    </a>
</template>
        </UBreadcrumb>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const home = ref({
    icon: 'ph:house',
    route: '/introduction'
});
const items = ref([
    { label: 'Components' },
    { label: 'Form' },
    { label: 'InputText', route: '/inputtext' }
]);
</script>
