<script setup lang="ts">
const props = defineProps({
    code: { type: String, default: '' },
    language: { type: String, default: null },
    filename: { type: String, default: null }
})

const { copy, copied } = useClipboard({ source: () => props.code })
</script>

<template>
    <div class="group relative my-6">
        <div v-if="filename" class="flex items-center bg-slate-800 px-4 py-2 rounded-t-xl border-b border-slate-700">
            <span class="text-xs font-mono text-slate-400">{{ filename }}</span>
        </div>

        <div class="relative">
      <pre
          :class="[
          !filename ? 'rounded-xl' : 'rounded-b-xl',
          'overflow-x-auto bg-slate-900 p-4 text-sm leading-6 text-slate-50'
        ]"
      ><slot /></pre>

            <button
                type="button"
                @click="copy()"
                class="absolute right-3 top-3 flex h-8 items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-700 focus:outline-none opacity-0 group-hover:opacity-100"
            >
                <span v-if="copied" class="text-sky-400">Copied!</span>
                <span v-else>Copy</span>
            </button>
        </div>
    </div>
</template>