<script setup lang="ts">
interface Props {
    code?: string
    language?: string
    filename?: string
    highlights?: number[]
    meta?: string
    icon?: string
}

const props = withDefaults(defineProps<Props>(), {
    code: '',
    highlights: () => [],
})

const {copy, copied} = useClipboard({source: () => props.code})

// Logic to determine the icon based on filename extension or language
const fileIcon = computed(() => {
    if (props.icon) return props.icon

    const ext = props.filename?.split('.').pop() || props.language

    const icons: Record<string, string> = {
        js: 'vscode-icons:file-type-js-official',
        ts: 'vscode-icons:file-type-typescript-official',
        vue: 'vscode-icons:file-type-vue',
        css: 'vscode-icons:file-type-css',
        html: 'vscode-icons:file-type-html',
        php: 'vscode-icons:file-type-php',
        json: 'vscode-icons:file-type-json',
        md: 'vscode-icons:file-type-markdown',
        sh: 'vscode-icons:file-type-shell',
        shell: 'vscode-icons:file-type-shell',
        bash: 'vscode-icons:file-type-shell',
    }

    return icons[ext || ''] || 'ph:file-code'
})
</script>

<template>
    <div class="group relative rounded-xl overflow-hidden shadow-lg dark:shadown-none ring-1 ring-surface-300/10">
        <div
            v-if="filename"
            class="flex items-center justify-between border-b border-surface-300 dark:border-surface-700 dark:bg-surface-800/50 px-4 py-3"
        >
            <div class="flex items-center gap-2">
                <Icon :name="fileIcon" class="h-5 w-5"/>
                <span class="text-sm font-medium text-surface-200">{{ filename }}</span>
            </div>
        </div>

        <div class="relative">
            <pre
            :class="[
                'overflow-x-auto p-4 text-sm leading-6 m-0! rounded-none! bg-surface-0 dark:bg-surface-800/50',
                // If no filename, round the top corners. If filename, flat top (handled by parent overflow-hidden)
                !filename,
                $attrs.class
            ]"
        ><slot/></pre>

            <ClientOnly fallback-tag="span">
                <button
                    type="button"
                    @click="copy()"
                    :class="[
            'absolute right-3 flex h-8 items-center gap-1.5 rounded-md border border-surface-300 dark:border-surface-700 dark:bg-surface-800 px-2 py-1 text-xs font-medium text-surface-600 dark:text-surface-300 transition focus:outline-none opacity-0 group-hover:opacity-100 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-surface-800 dark:hover:text-white cursor-pointer',
            filename ? 'top-3' : 'top-3'
          ]"
                >
                    <Icon
                        :name="copied ? 'ph:check' : 'ph:copy'"
                        :class="copied ? 'text-sky-600 dark:text-sky-400' : ''"
                        class="h-4 w-4"
                    />
                    <span v-if="copied" class="text-sky-400">Copied!</span>
                    <span v-else>Copy</span>
                </button>
            </ClientOnly>
        </div>
    </div>
</template>