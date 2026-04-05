<template>
    <Badge
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Badge>
</template>

<script setup lang="ts">
import Badge, { type BadgePassThroughOptions, type BadgeProps } from 'primevue/badge';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ BadgeProps {}
defineProps<Props>();

const theme = ref<BadgePassThroughOptions>({
    root: ({ props }) => ({
        class: [
            // Base Alignment & Font
            'inline-flex items-center justify-center font-medium transition-all duration-200',
            
            // Shape logic from preset
            {
                'rounded-md': props.value?.length !== 1 && props.size !== 'small',
                'rounded-full': props.value?.length === 1 || props.size === 'small' || props.value === null
            },

            // Sizing (Matches your layout scale)
            {
                'px-2 py-1 text-xs': props.size === null,
                'px-1.5 py-0.5 text-[0.625rem]': props.size === 'small',
                'px-2.5 py-1.5 text-sm': props.size === 'large',
                'px-3 py-2 text-base': props.size === 'xlarge'
            },

            // Empty (Dot) State
            { 'size-2 p-0 min-w-0 h-2': props.value === null },

            // Colors & Inset Rings (Soft Style)
            {
                // Primary (Indigo Replacement)
                'bg-primary-50 text-primary-700 inset-ring inset-ring-primary-700/10 dark:bg-primary-400/10 dark:text-primary-400 dark:inset-ring-primary-400/30':
                    props.severity === null || props.severity === 'primary',

                // Secondary (Surface/Gray Replacement)
                'bg-surface-50 text-surface-600 inset-ring inset-ring-surface-500/10 dark:bg-surface-400/10 dark:text-surface-400 dark:inset-ring-surface-400/20':
                    props.severity === 'secondary',

                // Success
                'bg-green-50 text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20':
                    props.severity === 'success',

                // Info
                'bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30':
                    props.severity === 'info',

                // Warning
                'bg-yellow-50 text-yellow-800 inset-ring inset-ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500 dark:inset-ring-yellow-400/20':
                    props.severity === 'warn',

                // Help (Purple)
                'bg-purple-50 text-purple-700 inset-ring inset-ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:inset-ring-purple-400/30':
                    props.severity === 'help',

                // Danger
                'bg-red-50 text-red-700 inset-ring inset-ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:inset-ring-red-400/20':
                    props.severity === 'danger',
                
                // Contrast
                'bg-surface-900 text-surface-0 dark:bg-surface-0 dark:text-surface-900': 
                    props.severity === 'contrast'
            }
        ]
    })
});
</script>