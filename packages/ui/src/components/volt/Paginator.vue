<template>
    <Paginator
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #container="{ page, pageCount, pageLinks, changePageCallback, prevPageCallback, nextPageCallback }">
            <nav class="flex items-center justify-between border-t border-surface-200 px-4 sm:px-0 dark:border-white/10 w-full">
                <div class="-mt-px flex w-0 flex-1">
                    <button 
                        @click="prevPageCallback" 
                        :disabled="page === 0"
                        class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed
                               text-surface-500 hover:border-surface-300 hover:text-surface-700 dark:text-surface-400 dark:hover:border-white/20 dark:hover:text-surface-200"
                    >
                        <Icon name="ph:arrow-left" class="mr-3 size-5 text-surface-400 dark:text-surface-500" aria-hidden="true" />
                        Previous
                    </button>
                </div>

                <div class="hidden md:-mt-px md:flex">
                    <button 
                        v-for="pageLink of pageLinks" 
                        :key="pageLink"
                        @click="changePageCallback(pageLink - 1)"
                        :class="[
                            'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium transition-colors duration-200',
                            page + 1 === pageLink 
                                ? 'border-primary-500 text-primary-600 dark:border-primary-400 dark:text-primary-400' 
                                : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300 dark:text-surface-400 dark:hover:border-white/20 dark:hover:text-surface-200'
                        ]"
                    >
                        {{ pageLink }}
                    </button>
                </div>

                <div class="-mt-px flex w-0 flex-1 justify-end">
                    <button 
                        @click="nextPageCallback" 
                        :disabled="page === pageCount - 1"
                        class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed
                               text-surface-500 hover:border-surface-300 hover:text-surface-700 dark:text-surface-400 dark:hover:border-white/20 dark:hover:text-surface-200"
                    >
                        Next
                        <Icon name="ph:arrow-right" class="ml-3 size-5 text-surface-400 dark:text-surface-500" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </template>
    </Paginator>
</template>

<script setup lang="ts">
// Heroicons import dihapus
import Paginator, { type PaginatorPassThroughOptions, type PaginatorProps } from 'primevue/paginator';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ PaginatorProps {}
defineProps<Props>();

const theme = ref<PaginatorPassThroughOptions>({
    root: {
        class: 'flex items-center justify-center flex-wrap w-full bg-surface-0 dark:bg-surface-950'
    }
});
</script>