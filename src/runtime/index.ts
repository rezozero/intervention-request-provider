import { joinURL } from 'ufo'
import type { ResolvedImageModifiers } from '@nuxt/image'
import { defineProvider } from '@nuxt/image/runtime'
import { useRuntimeConfig } from '#imports'

export interface InterventionRequestImageModifiers extends ResolvedImageModifiers {
    contrast?: number
    sharpen?: number
    interlace?: boolean
    grayscale?: boolean
    greyscale?: boolean
    flip?: 'h' | 'v'
    crop?: string
    align?: 'tl' | 't' | 'tr' | 'l' | 'c' | 'r' | 'bl' | 'b' | 'br'
    noProcess?: boolean
    hotspot?: string
}

export interface InterventionRequestImageOptions {
    modifiers?: InterventionRequestImageModifiers
    baseUrl?: string
    noProcessBaseUrl?: string
    imagesPath?: string
}

const JPEG_REGEX = /jpe?g/

function addFormatToSrc(src: string, format: string): string {
    const extension = src.split('.').pop()

    if (
        extension === format ||
        (extension?.match(JPEG_REGEX) && format.match(JPEG_REGEX)) // Avoid add `.jpg` to `.jpeg`, and vice versa
    ) {
        return src
    }

    return src + '.' + format
}

export default defineProvider<InterventionRequestImageOptions>({
    getImage(src, options) {
        const { modifiers, baseUrl = '/', noProcessBaseUrl = '', imagesPath = '' } = options
        const config = useRuntimeConfig()

        const operations = [`q${modifiers.quality ?? 90}`]

        if (modifiers.fit && /^[0-9]+[:x][0-9]+$/.test(modifiers.fit)) {
            operations.push(`f${modifiers.fit}`)
        } else {
            if (modifiers.width && modifiers.width > 1) {
                operations.push(`w${modifiers.width}`)
            }
            if (modifiers.height && modifiers.height > 1) {
                operations.push(`h${modifiers.height}`)
            }
        }

        if (modifiers.crop) {
            operations.push(`c${modifiers.crop}`)
        }
        if (modifiers.contrast && modifiers.contrast > 0) {
            operations.push(`k${modifiers.contrast}`)
        }
        if (modifiers.sharpen && modifiers.sharpen > 0) {
            operations.push(`s${modifiers.sharpen}`)
        }
        if (modifiers.align) {
            operations.push(`a${modifiers.align}`)
        }
        if (modifiers.blur && modifiers.blur > 0) {
            operations.push(`l${modifiers.blur}`)
        }
        if (modifiers.interlace === true) {
            operations.push('i')
        }
        if (modifiers.grayscale === true || modifiers.greyscale === true) {
            operations.push('g')
        }
        if (modifiers.flip === 'h' || modifiers.flip === 'v') {
            operations.push(`m${modifiers.flip}`)
        }
        if (modifiers.hotspot) {
            operations.push(`d${modifiers.hotspot}`)
        }

        // process modifiers
        const operationsString = operations.join('-')

        if (modifiers.format) src = addFormatToSrc(src, modifiers.format)

        const getUrl = function (): string {
            if (src.match('^https?')) {
                return src
            }

            const isSvg = modifiers.format === 'svg' || src.split('.').pop()?.slice(0, 3) === 'svg'

            if (isSvg || modifiers.noProcess) {
                return joinURL(config.public.interventionRequest?.noProcessBaseUrl || noProcessBaseUrl, src)
            }

            return joinURL(
                config.public.interventionRequest?.baseUrl || baseUrl,
                operationsString,
                config.public.interventionRequest?.imagesPath || imagesPath,
                src,
            )
        }

        return {
            url: getUrl(),
            format: modifiers.format,
        }
    },
})
