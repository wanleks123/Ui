<template>
  <DocsCard>
    <UMenu :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a 
            v-ripple 
            :href="href" 
            v-bind="props.action" 
            @click="navigate" 
            class="flex items-center gap-2 px-3 py-2"
          >
            <Icon :name="item.icon" style="width: 20px; height: 20px; min-width: 20px; display: block;" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>

        <a 
          v-else 
          v-ripple 
          :href="item.url || '#'" 
          v-bind="props.action" 
          @click="(e) => { if(item.command) { e.preventDefault(); item.command(); } }"
          class="flex items-center gap-2 px-3 py-2"
        >
          <Icon :name="item.icon" style="width: 20px; height: 20px; min-width: 20px; display: block;" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </UMenu>
  </DocsCard>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

// Pastikan import ini ada jika tidak auto-import
// import { Icon } from '#components' 

const router = useRouter();

const items = ref([
  {
    label: 'Router Link',
    icon: 'ph:paint-brush', // Pakai format titik dua kembali
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
    icon: 'ph:arrow-square-out',
    url: 'https://vuejs.org/'
  }
]);
</script>