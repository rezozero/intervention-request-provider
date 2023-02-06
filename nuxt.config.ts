// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'playground',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    dir: {
        assets: 'playground/assets',
        pages: 'playground/pages',
        layouts: 'playground/layouts',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    modules: ['@nuxt/image-edge'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    runtimeConfig: {
        public: {
            interventionRequest: {
                baseUrl: process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_BASE_URL ?? 'http://localhost:8080/assets',
                noProcessBaseUrl:
                    process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_NO_PROCESS_BASE_URL ?? 'http://localhost:8080/images',
                imagesPath: 'images',
            },
        },
    },

    image: {
        provider: 'interventionRequest',
        providers: {
            interventionRequest: {
                name: 'interventionRequest',
                provider: './index.ts',
                options: {
                    imagesPath: 'images',
                },
            },
        },
    },
})
