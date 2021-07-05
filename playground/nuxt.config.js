export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'playground',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxt/image'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        interventionRequest: {
          baseUrl: 'http://localhost:8080/assets'
        }
    },

    image: {
        provider: 'interventionRequest',
        providers: {
            interventionRequest: {
                name: 'interventionRequest',
                provider: '../dist/index.js',
                options: {
                    imagesPath: 'images'
                }
            }
        }
    }
}
