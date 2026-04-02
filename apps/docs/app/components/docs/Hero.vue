<script setup lang="ts">
import {createHighlighter} from 'shiki'

// Images
import blurCyanImage from '@/assets/images/blur-cyan.png'
import blurIndigoImage from '@/assets/images/blur-indigo.png'

const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
    {name: 'cache-advance.config.js', isActive: true},
    {name: 'package.json', isActive: false},
]

// 1. Initialize with the new createHighlighter API
// We specify the themes and languages we want to bundle
const highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['javascript']
})

// 2. Generate HTML (The method signature remains similar, but now lives on the highlighter instance)
const highlightedHtml = highlighter.codeToHtml(code, {
    lang: 'javascript',
    theme: 'github-dark'
})

const lines = computed(() => code.split('\n'))
</script>

<template>
    <div class="overflow-hidden bg-surface-900 dark:-mt-19 dark:-mb-32 dark:pt-19 dark:pb-32">
        <div class="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">

                <div class="relative z-10 md:text-center lg:text-left">
                    <img class="absolute right-full bottom-full -mr-72 -mb-56 opacity-50 select-none" :src="blurCyanImage" alt=""
                         width="530"/>
                    <div class="relative">
                        <p class="inline bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent">
                            Never start from scratch again.
                        </p>
                        <p class="mt-3 text-xl tracking-tight text-surface-400">
                            Access a complete library of standard UI elements ahead of time, so you can focus on building features rather than fighting with CSS.
                        </p>
                        <div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
                            <DocsButton href="/#getting-started">Get started</DocsButton>
                            <DocsButton href="https://git.unimma.ac.id/unimma/ui" target="_blank" variant="secondary">View on Git Unimma</DocsButton>
                        </div>
                    </div>
                </div>

                <div class="relative lg:static xl:pl-10">
                    <div
                        class="absolute inset-x-[-50vw] -top-32 -bottom-48 mask-[linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:mask-none dark:mask-[linear-gradient(transparent,white,transparent)] lg:dark:mask-[linear-gradient(white,white,transparent)]">
                        <DocsHeroBackground
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"/>
                    </div>

                    <div class="relative group">
                        <img class="absolute -top-64 -right-64 select-none" :src="blurCyanImage" alt="" width="530"/>
                        <img class="absolute -right-44 -bottom-40 select-none" :src="blurIndigoImage" alt="" width="567"/>

                        <div
                            class="absolute inset-0 rounded-2xl bg-linear-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 group-hover:opacity-20 transition-all blur-lg"/>
                        <div class="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm">
                            <div class="pt-4 pl-4">
                                <svg aria-hidden="true" viewBox="0 0 42 10" fill="none"
                                     class="h-2.5 w-auto stroke-surface-500/30">
                                    <circle cx="5" cy="5" r="4.5"/>
                                    <circle cx="21" cy="5" r="4.5"/>
                                    <circle cx="37" cy="5" r="4.5"/>
                                </svg>

                                <div class="mt-4 flex space-x-2 text-xs">
                                    <div v-for="tab in tabs" :key="tab.name" :class="[
                                            'flex h-6 rounded-full',
                                            tab.isActive ? 'bg-linear-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300' : 'text-surface-500'
                                          ]">
                                        <div
                                            :class="['flex items-center rounded-full px-2.5', tab.isActive && 'bg-surface-800']">
                                            {{ tab.name }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-6 flex items-start px-1 text-sm">
                                    <div aria-hidden="true"
                                         class="border-r border-surface-300/5 pr-4 font-mono text-surface-600 select-none">
                                        <div v-for="(_, i) in lines" :key="i">
                                            {{ (i + 1).toString() }}
                                        </div>
                                    </div>

                                    <div class="flex overflow-x-auto px-4 pb-6 shiki-hero" v-html="highlightedHtml"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shiki-hero :deep(pre) {
    background-color: transparent !important;
    margin: 0;
    padding: 0;
}
</style>