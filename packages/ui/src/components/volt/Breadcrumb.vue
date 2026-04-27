<template>
    <Breadcrumb
        unstyled
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template #itemicon="{ item, class: itemClass }">
            <Icon 
                v-if="item.icon && item.icon.includes(':')" 
                :icon="item.icon" 
                :class="itemClass" 
            />
            <span v-else-if="item.icon" :class="[item.icon, itemClass]"></span>
        </template>

        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Breadcrumb>
</template>

<script setup lang="ts">
import Breadcrumb, { type BreadcrumbPassThroughOptions } from 'primevue/breadcrumb';
import { Icon } from '@iconify/vue'; // Import ini!
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ BreadcrumbProps {}
defineProps<Props>();

const theme = ref<BreadcrumbPassThroughOptions>({
    root: `bg-surface-0 dark:bg-surface-900 p-4 overflow-x-auto`,
    list: `m-0 p-0 list-none flex items-center flex-nowrap gap-2`,
    item: ``,
    itemLink: `no-underline flex items-center gap-2 transition-colors duration-200 rounded-md
        text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`,
    itemIcon: ``,
    itemLabel: ``,
    separator: `flex items-center text-surface-400 dark:text-surface-500`,
    separatorIcon: ``
});
</script>
