<script setup lang="ts">
import type { ContentCollectionItem } from '@nuxt/content';

interface PageMeta {
    // Define your custom keys here with their types
    title?: string;
    description?: string;
    links?: {
      title: string;
        href: string;
        external?: boolean;
    }[];
     // Add any other custom meta properties you need
     [key: string]: any; // Allows for arbitrary keys if needed
}

interface Props {
    page: PageMeta | ContentCollectionItem | null | undefined
}

const props = defineProps<Props>()
</script>

<template>
    <div class="flex">
        <div class="w-full max-w-2xl min-w-0 lg:min-w-lg flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
            <article>
                <DocsHeader :title="page?.title" :links="page?.meta?.links" />

                <Prose>
                    <slot />
                </Prose>
            </article>

            <DocsPrevNextLinks />
        </div>

        <DocsTableOfContents v-if="page?.body?.toc" :table-of-contents="page?.body?.toc?.links" />
    </div>
</template>