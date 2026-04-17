
<template>
    <DocsCard>
        <div class="flex items-center gap-2">
            <UCheckbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1"> Cheese </label>
        </div>
        <div class="flex items-center gap-2">
            <UCheckbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2"> Mushroom </label>
        </div>
        <div class="flex items-center gap-2">
            <UCheckbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3"> Pepper </label>
        </div>
        <div class="flex items-center gap-2">
            <UCheckbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4"> Onion </label>
        </div>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
</script>
