<template>
    <AvatarGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AvatarGroup>
</template>

<script setup lang="ts">
import AvatarGroup, { type AvatarGroupPassThroughOptions, type AvatarGroupProps } from 'primevue/avatargroup';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AvatarGroupProps {}
defineProps<Props>();

const theme = ref<AvatarGroupPassThroughOptions>({
    root: ({ props }) => ({
        class: [
            // Container
            'flex items-center overflow-hidden',
            
            // Overlap Spacing (Matches size 8, 10, 12 layouts)
            // Note: Use -space-x-1 if specifically using size-6 avatars
            '-space-x-2', 

            // Child Overrides: Apply the 'ring' effect to all children
            // to create the separation border seen in the layout
            '*:ring-2 *:ring-white dark:*:ring-surface-900',
            
            // Ensure children maintain their shape
            '*:relative *:z-0 hover:*:z-10'
        ]
    })
});
</script>