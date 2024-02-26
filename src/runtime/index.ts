import { joinURL } from 'ufo'
import type { ImageModifiers, ImageOptions, ResolvedImage } from '@nuxt/image'
import { useRuntimeConfig } from '#imports'

export interface InterventionRequestImageModifiers extends ImageModifiers {
    contrast?: number
    sharpen?: number
    interlace?: boolean
    grayscale?: boolean
    greyscale?: boolean
    flip?: 'h' | 'v'
    crop?: string
    blur?: number
    align?: 'tl' | 't' | 'tr' | 'l' | 'c' | 'r' | 'bl' | 'b' | 'br'
    noProcess?: boolean
}

export function getImage(
    src: string,
    { modifiers, baseUrl = '/', noProcessBaseUrl = '', imagesPath = '' }: ImageOptions,
): ResolvedImage {
    const config = useRuntimeConfig()

    const {
        width,
        height,
        format,
        fit,
        contrast,
        sharpen,
        interlace,
        grayscale,
        greyscale,
        flip,
        crop,
        blur,
        align,
        noProcess,
        ...providerModifiers
    } = modifiers as Partial<InterventionRequestImageModifiers>
    const operations = [`q${providerModifiers.quality ?? 90}`]

    if (fit && /^[0-9]+[:x][0-9]+$/.test(fit)) {
        operations.push(`f${fit}`)
    } else {
        if (width && width > 1) {
            operations.push(`w${width}`)
        }
        if (height && height > 1) {
            operations.push(`h${height}`)
        }
    }

    if (crop) {
        operations.push(`c${crop}`)
    }
    if (contrast && contrast > 0) {
        operations.push(`k${contrast}`)
    }
    if (sharpen && sharpen > 0) {
        operations.push(`s${sharpen}`)
    }
    if (align) {
        operations.push(`a${align}`)
    }
    if (blur && blur > 0) {
        operations.push(`l${blur}`)
    }
    if (interlace === true) {
        operations.push('i')
    }
    if (grayscale === true || greyscale === true) {
        operations.push('g')
    }
    if (flip === 'h' || flip === 'v') {
        operations.push(`m${flip}`)
    }

    // process modifiers
    const operationsString = operations.join('-')

    if (format === 'webp' && !src.endsWith('.webp')) {
        src += '.webp'
    }

    const getUrl = function (): string {
        if (src.match('^https?')) {
            return src
        }

        const isSvg = format === 'svg' || src.split('.').pop()?.slice(0, 3) === 'svg'

        if (isSvg || noProcess) {
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
        format,
    }
}
