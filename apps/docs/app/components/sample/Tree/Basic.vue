
<template>
    <DocsCard>
        <UTree :value="nodes" class="w-full md:w-[30rem]"></UTree>
    </DocsCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
</script>
