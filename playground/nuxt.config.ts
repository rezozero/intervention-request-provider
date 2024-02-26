// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['../src/module', '@nuxt/image'],
    image: {
        provider: 'interventionRequest',
        providers: {
            interventionRequest: {
                options: {
                    imagesPath: 'images',
                },
            },
        },
    },
})
