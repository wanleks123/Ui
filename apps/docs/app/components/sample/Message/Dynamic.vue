
<template>
    <DocsCard>
        <div class="flex gap-2">
            <UButton label="Show" @click="addMessages()" />
            <UButton label="Clear" severity="secondary" @click="clearMessages()" />
        </div>
        <transition-group name="p-message" tag="div" class="flex flex-col">
            <UMessage v-for="msg of messages" :key="msg.id" :severity="msg.severity" class="mt-4">{{ msg.content }}</UMessage>
        </transition-group>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
</script>
