
<template>
    <DocsCard>
        <UTabs value="0" scrollable>
            <UTabList>
                <UTab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
                    {{ tab.title }}
                </UTab>
            </UTabList>
            <UTabPanels>
                <UTabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </UTabPanel>
            </UTabPanels>
        </UTabs>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` })));
</script>
