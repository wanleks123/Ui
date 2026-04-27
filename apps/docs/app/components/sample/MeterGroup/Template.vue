
<template>
    <DocsCard>
        <UMeterGroup :value="value" labelPosition="start">
            <template #label="{ value }">
                <div class="flex flex-wrap gap-4">
                    <template v-for="val of value" :key="i">
                        <UCard class="flex-1 border border-surface shadow-none">
                            <template #content>
                                <div class="flex justify-between gap-8">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-surface-500 dark:text-surface-400 text-sm">{{ val.label }}</span>
                                        <span class="font-bold text-lg">{{ val.value }}%</span>
                                    </div>
                                    <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" :style="{ backgroundColor: `${val.color1}`, color: '#ffffff' }">
                                        <i :class="val.icon" />
                                    </span>
                                </div>
                            </template>
                        </UCard>
                    </template>
                </div>
            </template>
            <template #meter="slotProps">
                <span :class="slotProps.class" :style="{ background: `linear-gradient(to right, ${slotProps.value.color1}, ${slotProps.value.color2})`, width: slotProps.size }" />
            </template>
            <template #start="{ totalPercent }">
                <div class="flex justify-between mt-4 mb-2 relative">
                    <span>Storage</span>
                    <span :style="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
                    <span class="font-medium">1TB</span>
                </div>
            </template>
            <template #end>
                <div class="flex justify-between mt-4">
                    <UButton label="Manage Storage" variant="outlined" size="small" />
                    <UButton label="Update Plan" size="small" />
                </div>
            </template>
        </UMeterGroup>
    </DocsCard>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'ph:squares-four' },
    { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'ph:chat-circle-dots' },
    { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'ph:image' },
    { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'ph:gear' }
]);
</script>
