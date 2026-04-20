
<template>
    <DocsCard>
        <UMultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
            @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" filter placeholder="Select Item" class="w-full md:w-80" />
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';


const selectedItems = ref();
const selectAll = ref(false);
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i })));

const onSelectAllChange = (event) => {
    selectedItems.value = event.checked ? items.value.map((item) => item.value) : [];
    selectAll.value = event.checked;
};
const onChange = (event) => {
    selectAll.value = event.value.length === items.value.length;
}

</script>
