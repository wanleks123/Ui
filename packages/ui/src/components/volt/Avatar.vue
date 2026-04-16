<template>
    <Avatar
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Avatar>
</template>

<script setup lang="ts">
import Avatar, { type AvatarPassThroughOptions, type AvatarProps } from 'primevue/avatar';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AvatarProps {}
defineProps<Props>();

const theme = ref<AvatarPassThroughOptions>({
    root: ({ props, parent }) => ({
        class: [
            // Alignments
            'inline-flex items-center justify-center relative shrink-0',
            
            // Sizes (Matching your layout scale)
            {
                'size-8': props.size == null || props.size == 'normal',
                'size-12': props.size == 'large',
                'size-16': props.size == 'xlarge'
            },

            // Shapes
            {
                'rounded-md': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            },

            // Colors & Outline (from your layout)
            'bg-surface-500 dark:bg-surface-800',
            'outline -outline-offset-1 outline-black/5 dark:outline-white/10',

            // AvatarGroup Integration
            { 
                '-ml-4 border-2 border-white dark:border-surface-900': 
                parent.instance.$style?.name == 'avatargroup' 
            }
        ]
    }),
    label: ({ props }) => ({
        class: [
            'font-medium ',
            {
                'text-sm': props.size == null || props.size == 'normal',
                'text-lg': props.size == 'large',
                'text-xl': props.size == 'xlarge'
            }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'text-white',
            {
                'text-base': props.size == null || props.size == 'normal',
                'text-2xl': props.size == 'large',
                'text-[2rem]': props.size == 'xlarge'
            }
        ]
    }),
    image: ({ props }) => ({
        class: [
            'h-full w-full',
            {
                'rounded-md': props.shape == 'square',
                'rounded-full': props.shape == 'circle'
            }
        ]
    })
});
</script>