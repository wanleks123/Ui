
<template>
    <DocsCard>
        <UMenu :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </UMenu>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Router Link',
        icon: 'ph:palette',
        route: '/theming/unstyled'
    },
    {
        label: 'Programmatic',
        icon: 'ph:link',
        command: () => {
            router.push('/introduction');
        }
    },
    {
        label: 'External',
        icon: 'ph:home',
        url: 'https://vuejs.org/'
    }
]);
</script>
