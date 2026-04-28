
<template>
    <DocsCard>
        <UTree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-[30rem]"></UTree>
        <UTree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-[30rem]"></UTree>
    </DocsCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
});
</script>
