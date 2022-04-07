import { joinURL } from 'ufo'
import { ImageModifiers, ImageOptions, ResolvedImage } from '@nuxt/image'
import { Context } from '@nuxt/types'

interface ImageContext {
    nuxtContext: Context
}

export function getImage(
    src: string,
    { modifiers, baseUrl = '/', basePath = '', imagesPath = '' }: ImageOptions,
    { nuxtContext }: ImageContext
): ResolvedImage {
    const {
        width,
        height,
        format,
        fit,
        contrast,
        sharpen,
        interlace,
        grayscale,
        flip,
        crop,
        blur,
        ...providerModifiers
    } = modifiers as Partial<ImageModifiers>
    const operations = [`q${providerModifiers.quality ?? 90}`]

    if (fit) {
        operations.push(`f${fit}`)
    } else {
        if (width && width > 1) operations.push(`w${width}`)
        if (height && height > 1) operations.push(`h${height}`)
    }

    if (crop) operations.push(`c${crop}`)

    if (contrast > 0) operations.push(`k${contrast}`)

    if (sharpen > 0) operations.push(`s${sharpen}`)

    if (blur > 0) operations.push(`l${blur}`)

    if (interlace === true) operations.push('i')

    if (grayscale === true) operations.push('g')

    if (flip === 'h' || flip === 'v') operations.push(`m${flip}`)

    // process modifiers
    const operationsString = operations.join('-')

    if (format === 'webp') src += '.webp'

    const getUrl = function (): string {
        if (src.match('^https?')) return src

        const base = joinURL(nuxtContext.$config.interventionRequest?.baseUrl || baseUrl)
        const isSvg = format === 'svg' || src.split('.').pop()?.slice(0, 3) === 'svg'

        if (isSvg) return joinURL(base, src)

        return joinURL(base, basePath, operationsString, imagesPath, src)
    }

    return {
        url: getUrl(),
        isStatic: process.static && !nuxtContext.isDev && nuxtContext.route.query.preview !== '1',
    }
}
