
<template>
    <DocsCard>
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
                <UCheckbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
</script>
