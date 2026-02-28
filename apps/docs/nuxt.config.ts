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
    '@unimma/ui/nuxt'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  css: [
    '~/assets/css/main.css',
  ],

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