// packages/ui/src/nuxt.ts
import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: '@unimma/ui',
        configKey: 'unimmaUi',
        compatibility: {
            nuxt: '^3.0.0 || ^4.0.0'
        }
    },

    async setup(options, nuxt) {
        // 1. Create a resolver to find files relative to this module
        const { resolve } = createResolver(import.meta.url)

        // 2. Add the CSS automatically
        // Point to the built CSS if in production, or source if you want
        // nuxt.options.css.push(resolve('../dist/style.css'))

        // 3. Register the components directory
        // This allows Nuxt to scan your components and auto-import them
        addComponentsDir({
            path: resolve('./components'),
            prefix: options.prefix,
            pathPrefix: false, // Prevents redundancy like UButtonButton
            watch: true, // Re-scan on file changes (great for HMR)
            global: true
        })

        // 4. (Optional) If you have plugins (like v-tooltip directives)
        // addPlugin(resolve('./plugins/my-plugin'))
    },
})