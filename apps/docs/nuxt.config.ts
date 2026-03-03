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
        '@nuxtjs/color-mode',
        '@vueuse/nuxt',
        '@unimma/ui/nuxt',
        'nuxt-shiki',
    ],
    devtools: {enabled: true},
    compatibilityDate: '2024-04-03',

    app: {
        head: {
            bodyAttrs: {
                class: 'bg-white dark:bg-surface-900'
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
                    langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'php', 'bash', 'shell', 'mdc', 'md', 'yaml'],
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

    colorMode: {
        preference: 'system',
        fallback: 'light',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storage: 'localStorage',
        storageKey: 'theme'
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