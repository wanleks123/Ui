<template>
    <div class="relative inline-flex">
        <slot />
        <PhDot v-bind="$attrs"
            class="absolute top-0 inset-e-0 translate-x-[50%] translate-y-[-50%] size-16 origin-top-right m-0 outline-0"
            :class="$attrs.severity ? severityClasses[$attrs.severity] : 'text-primary-500'"
        />
    </div>
</template>

<script setup lang="ts">
import Badge, { type BadgeProps } from './Badge.vue';
import {PhDot} from "@phosphor-icons/vue";

interface Props extends /* @vue-ignore */ BadgeProps {}
defineProps<Props>();

defineOptions({
    inheritAttrs: false
});

const severityClasses = {
    'secondary': 'text-surface-200 dark:text-surface-700',
    'success': 'text-teal-500',
    'info': 'text-cyan-500',
    'warning': 'text-amber-500',
    'help': 'text-purple-500',
    'danger': 'text-red-500',
    'contrast': 'text-surface-0 dark:text-surface-900'
}
</script>
