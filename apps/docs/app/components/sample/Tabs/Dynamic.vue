
<template>
    <DocsCard>
        <UTabs value="0">
            <UTabList>
                <UTab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</UTab>
            </UTabList>
            <UTabPanels>
                <UTabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                    <p class="m-0">{{ tab.content }}</p>
                </UTabPanel>
            </UTabPanels>
        </UTabs>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content', value: '0' },
    { title: 'Tab 2', content: 'Tab 2 Content', value: '1' },
    { title: 'Tab 3', content: 'Tab 3 Content', value: '2' }
]);
</script>
