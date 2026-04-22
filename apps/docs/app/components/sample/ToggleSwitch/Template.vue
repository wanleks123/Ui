
<template>
    <DocsCard>
        <UToggleSwitch v-model="checked">
            <template #handle="{ checked }">
                <i :class="['!text-xs pi', { 'pi-check': checked, 'pi-times': !checked }]" />
            </template>
        </UToggleSwitch>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
