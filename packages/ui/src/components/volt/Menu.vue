<template>
    <Menu
        ref="el"
        unstyled
        :model="model"
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
        
        <template #item="{ item, props }">
    <a v-ripple :href="item.url" v-bind="props.action" class="group">
        <Icon 
            v-if="item.icon"
            :name="item.icon" 
            :class="[
                item.current ? 'text-primary-600 dark:text-primary-400' : 'text-surface-400 group-hover:text-primary-600 dark:text-surface-500 dark:group-hover:text-white',
                'size-6 shrink-0 transition-colors duration-200'
            ]" 
        />
        u
        <span :class="[item.current ? 'text-primary-600 dark:text-white' : 'text-surface-700 dark:text-surface-300 group-hover:text-primary-600 dark:group-hover:text-white']">
            {{ item.label }}
        </span>
        </a>
</template>
    </Menu>
</template>

<script setup lang="ts">
import Menu, { type MenuPassThroughOptions, type MenuProps } from 'primevue/menu';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ MenuProps {
    model?: any[];
}
defineProps<Props>();

const theme = ref<MenuPassThroughOptions>({
    root: {
        class: [
            // Sizing and Shape
            'min-w-[12.5rem] rounded-md',
            // Spacing
            'mt-1 p-1',
            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'shadow-lg'
        ]
    },
    list: {
        class: 'list-none m-0 p-0 outline-none flex flex-col gap-y-1'
    },
    item: {
        class: 'relative'
    },
    itemContent: ({ context }: any) => ({
        class: [
            'rounded-md transition-all duration-200',
            // Active/Current State vs Normal State
            context.active 
                ? 'bg-surface-50 dark:bg-white/5' 
                : 'hover:bg-surface-50 dark:hover:bg-white/5',
            // Disabled
            { 'opacity-60 pointer-events-none': context.disabled }
        ]
    }),
    itemLink: {
        class: [
            'relative flex items-center gap-x-3 px-2 py-2',
            'text-sm/6 font-semibold no-underline cursor-pointer select-none overflow-hidden'
        ]
    },
    submenuLabel: {
        class: [
            'text-xs/6 font-semibold uppercase tracking-wider',
            'mt-4 mb-2 px-2',
            'text-surface-400 dark:text-surface-500'
        ]
    },
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-700 my-1'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
});

const el = ref();
defineExpose({
    toggle: (event: any) => el.value.toggle(event)
});
</script>