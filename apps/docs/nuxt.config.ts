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
            script: [
                {
                    // This script runs INSTANTLY as the browser parses the head.
                    // It does not wait for Vue, Nuxt, or DOMContentLoaded.
                    innerHTML: `
                        (function() {
                            // 1. Define detection logic
                            const getTheme = () => {
                                if (localStorage.theme === 'dark') return 'dark';
                                if (localStorage.theme === 'light') return 'light';
                                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                            };

                            const theme = getTheme();
                            const html = document.documentElement;

                            // 2. Apply Theme Class (Blocking)
                            if (theme === 'dark') {
                                html.classList.add('dark');
                            } else {
                                html.classList.remove('dark');
                            }

                            // 3. Apply OS Class (Mac/Win)
                            if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
                                html.classList.add('mac');
                            } else {
                                html.classList.add('win');
                            }

                            // 4. Handle Favicon (Immediate)
                            const link = document.createElement('link');
                            link.rel = 'shortcut icon';
                            link.href = theme === 'dark' 
                                ? 'https://auth.unimma.ac.id/favicon-dark.png' 
                                : 'https://auth.unimma.ac.id/favicon-light.png';
                            document.head.appendChild(link);
                        })();
                    `,
                    type: 'text/javascript'
                }
            ],
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
  serverBundle: {
    collections: ['ph']
  },
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