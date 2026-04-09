import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        vue(),
        tsconfigPaths({
            projects: [resolve(__dirname, 'tsconfig.json')],
        }),
        dts({
            tsconfigPath: './tsconfig.json',
            insertTypesEntry: true, // Creates a convenient index.d.ts export
            rollupTypes: false       // Bundles all d.ts files into a single file (cleaner)
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'UnimmaUI',
            fileName: 'unimma-ui',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue', 'primevue', 'pinia', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                    primevue: 'PrimeVue',
                    pinia: 'Pinia'
                }
            }
        }
    }
})