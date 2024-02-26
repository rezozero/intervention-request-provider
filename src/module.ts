import { createResolver, defineNuxtModule } from '@nuxt/kit'
import type { ModuleOptions as NuxtImageModuleOptions } from '@nuxt/image'
import { defu } from 'defu'

interface ModulePublicRuntimeConfig {
    INTERVENTION_REQUEST_BASE_URL?: string
    INTERVENTION_REQUEST_NO_PROCESS_BASE_URL?: string
    INTERVENTION_REQUEST_IMAGES_PATH?: string
}

interface NuxtImageAppOptions {
    image?: Partial<NuxtImageModuleOptions>
}

export default defineNuxtModule({
    meta: {
        name: 'intervention-request-provider',
        configKey: 'interventionRequestProvider',
    },
    setup(options, nuxt) {
        // Add runtime config properties
        nuxt.options.runtimeConfig.public.interventionRequest = defu(
            nuxt.options.runtimeConfig.public.interventionRequest as ModulePublicRuntimeConfig,
            {
                baseUrl: 'http://localhost:8080/assets',
                noProcessBaseUrl: 'http://localhost:3000',
                imagesPath: '',
            },
        )

        // Add Nuxt Image provider
        const resolver = createResolver(import.meta.url)

        ;(nuxt.options as NuxtImageAppOptions).image = defu((nuxt.options as NuxtImageAppOptions).image, {
            providers: {
                interventionRequest: {
                    name: 'interventionRequest',
                    provider: resolver.resolve('./runtime/index'),
                },
            },
        } as Partial<NuxtImageModuleOptions>)
    },
})
