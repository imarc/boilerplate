import { defineConfig } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')

import fractal from './fractal.config.js'

export default defineConfig(async ({ command, mode }) => {
    const config = {
        plugins: [
            createVuePlugin(),
        ],
        build: {
            manifest: true,
            outDir: 'web/dist',
            assetsDir: '.',
            rollupOptions: {
                input: 'resources/js/main.js',
            },
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js',
            },
        },
    }

    if (command === 'serve') {
        fractal.set('viteServer', true)
        const server = fractal.web.server({ sync: true, port: 3010 })
        await server.start()

        config.server = {
            proxy: {
                '^(?!/(resources|node_modules|@vite|@id|__vite_ping)).*': {
                    target: server.url,
                },
            },
        }
    }

    return config
})
