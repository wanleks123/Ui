<script setup lang="ts">
import { ref, provide, computed } from 'vue'

const showFullCode = ref(false)
const snippetCode = ref('')

// 1. PROVIDE DATA TO CHILDREN
provide('isInPreview', true)
provide('registerCode', (code: string, isFull: boolean) => {
    snippetCode.value = code
})

// 2. DYNAMIC COPY LOGIC
const currentCode = computed(() => snippetCode.value)

console.log(currentCode.value)
const { copy, copied } = useClipboard({ source: currentCode })
</script>

<template>
    <div class="code-preview-wrapper group/wrapper relative my-6">
        <div class="absolute top-3 right-3 z-20 flex items-center gap-2 opacity-0 group-hover/wrapper:opacity-100 transition-opacity">

            <button
                v-if="$slots.full"
                type="button"
                @click="showFullCode = !showFullCode"
                class="flex items-center gap-1.5 h-8 px-3 text-xs font-medium rounded-md border border-surface-300 dark:border-surface-700 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:text-surface-800 dark:hover:text-white transition cursor-pointer"
            >
                <Icon
                    :name="showFullCode ? 'ph:code-simple' : 'ph:code'"
                    class="h-4 w-4"
                />

                {{ showFullCode ? 'Show Snippet' : 'Show Full Code' }}
            </button>

            <button
                type="button"
                @click="copy()"
                class="flex h-8 items-center gap-1.5 rounded-md border border-surface-300 dark:border-surface-700 bg-surface-100 dark:bg-surface-800 px-2 py-1 text-xs font-medium text-surface-600 dark:text-surface-300 transition hover:text-surface-800 dark:hover:text-white cursor-pointer"
            >
                <Icon
                    :name="copied ? 'ph:check' : 'ph:copy'"
                    :class="copied ? 'text-sky-600 dark:text-sky-400' : ''"
                    class="h-4 w-4"
                />

                <span v-if="copied">Copied!</span>
                <span v-else>Copy</span>
            </button>
        </div>

        <div class="preview-content">
            <slot v-if="showFullCode && $slots.full" name="full" />
            <slot v-else />
        </div>
    </div>
</template>

<style scoped>
:deep(.group.relative) {
    margin: 0 !important;
}
</style>