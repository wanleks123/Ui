
<template>
    <DocsCard>
        <div class="flex flex-wrap gap-2 mb-6">
            <UButton type="button" icon="ph:plus" label="Expand All" @click="expandAll" />
            <UButton type="button" icon="ph:minus" label="Collapse All" @click="collapseAll" />
        </div>
        <UTree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-[30rem]"></UTree>
    </DocsCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const expandedKeys = ref({});

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
            expandNode(child);
        }
    }
};
</script>
