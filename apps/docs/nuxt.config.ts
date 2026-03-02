// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import path from 'node:path'

export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/test-utils',
        '@nuxt/scripts',
        '@vueuse/nuxt',
        '@unimma/ui/nuxt',
        'nuxt-shiki',
    ],
    devtools: {enabled: true},
    compatibilityDate: '2024-04-03',

    app: {
        head: {
            bodyAttrs: {
                class: 'bg-white dark:bg-slate-900'
            }
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },

    css: [
        '~/assets/css/main.css',
        '~/assets/css/prism.css',
    ],

    content: {
        build: {
            markdown: {
                highlight: {
                    // You can even use different themes for light/dark mode!
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark',
                        sepia: 'monokai'
                    },
                    // Preload languages for performance
                    preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff']
                }
            }
        }
    },

    icon: {
        mode: 'svg',
        cssLayer: 'base'
    },

    'unimmaUi': {
        prefix: 'U'
    },

    vite: {
        plugins: [
            tailwindcss() as any
        ],
        resolve: {
            alias: {
                '@unimma/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts')
            }
        }
    },

})