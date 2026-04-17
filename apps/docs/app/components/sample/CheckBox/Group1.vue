
<template>
    <DocsCard>
        <UCheckBoxGroup v-model="ingredients" class="flex flex-wrap gap-4">
            <div class="flex items-center gap-2">
                <UCheckbox inputId="ingredient5" value="Cheese" />
                <label for="ingredient5"> Cheese </label>
            </div>
            <div class="flex items-center gap-2">
                <UCheckbox   inputId="ingredient6" value="Mushroom" />
                <label for="ingredient6"> Mushroom </label>
            </div>
            <div class="flex items-center gap-2">
                <UCheckbox inputId="ingredient7" value="Pepper" />
                <label for="ingredient7"> Pepper </label>
            </div>
            <div class="flex items-center gap-2">
                <UCheckbox inputId="ingredient8" value="Onion" />
                <label for="ingredient8"> Onion </label>
            </div>
        </UCheckBoxGroup>
    </DocsCard>
</template>

<script setup>
import  { ref } from "vue";

const ingredients = ref([]);
</script>
