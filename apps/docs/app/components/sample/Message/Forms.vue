
<template>
    <DocsCard>
        <UMessage v-if="!username || !email" severity="error" icon="pi pi-times-circle" class="mb-2">Validation error</UMessage>
        <UMessage v-if="username && email" severity="success" icon="pi pi-times-circle" class="mb-2">Form is valid</UMessage>
        <div class="flex flex-col gap-1">
            <UInputText v-model="username" placeholder="Username" aria-label="username" :invalid="!username" />
            <UMessage v-show="!username" severity="error" variant="simple" size="small">Username is required</UMessage>
        </div>
        <div class="flex flex-col gap-1">
            <UInputText v-model="email" placeholder="Email" aria-label="email" :invalid="!email" />
            <UMessage v-show="!email" severity="error" variant="simple" size="small">Email is not valid</UMessage>
        </div>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from '@primevue/forms';

const username = ref(null);
const email = ref(null);
</script>
