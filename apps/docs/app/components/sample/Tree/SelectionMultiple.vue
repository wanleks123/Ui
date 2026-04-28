
<template>
    <DocsCard>
        <div class="flex items-center mb-6 gap-2">
            <UToggleSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <UTree v-model:selectionKeys="selectedKeys" :value="nodes" selectionMode="multiple" :metaKeySelection="checked" class="w-full md:w-[30rem]"></UTree>
    </DocsCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedKeys = ref(null);
const checked = ref(false);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
</script>
