import { defineNuxtModule } from '@nuxt/kit'
import { ModuleOptions } from '@nuxt/schema'

export type IRModuleOptions = ModuleOptions

export interface ModulePublicRuntimeConfig {
    NUXT_PUBLIC_INTERVENTION_REQUEST_BASE_URL: string
    NUXT_PUBLIC_INTERVENTION_REQUEST_NO_PROCESS_BASE_URL: string
    NUXT_PUBLIC_INTERVENTION_REQUEST_IMAGES_PATH: string
}

export default defineNuxtModule<IRModuleOptions>({
    meta: {
        name: 'intervention-request-provider',
        configKey: 'interventionRequestProvider',
    },
})
