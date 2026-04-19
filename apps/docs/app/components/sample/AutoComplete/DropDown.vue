
<template>
    <DocsCard>
        <UAutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    let _items = [...Array(10).keys()];

    items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
}
</script>
