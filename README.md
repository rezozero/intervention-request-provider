# intervention-request-provider
[InterventionRequest](https://github.com/ambroisemaupate/intervention-request) provider for [@nuxt/image](https://github.com/nuxt/image)

This is a **Nuxt 3** module.

## Installation

```sh
npm install --save-dev @rezo-zero/intervention-request-provider @nuxt/image
```

- Register Nuxt module `@rezo-zero/intervention-request-provider` and `@nuxt/image`:

```ts
// nuxt.config.ts
modules: [
    '@rezo-zero/intervention-request-provider',
    '@nuxt/image'
]
```

## Setup

### baseUrl

- As a runtime config variable (preferred)
```dotenv
#.env
NUXT_PUBLIC_INTERVENTION_REQUEST_BASE_URL=https://example.com/assets
```

- As a `@nuxt/image` provider option

```js
    // nuxt.config.ts
    image: {
        providers: {
            interventionRequest: {
                options: {
                    baseUrl: 'http://localhost'
                }
            }
        }
    }
```

### noProcessBaseUrl

- As a runtime config variable (preferred)
```dotenv
#.env
NUXT_PUBLIC_INTERVENTION_REQUEST_NO_PROCESS_BASE_URL=https://example.com/assets
```

- As a `@nuxt/image` provider option

```js
    // nuxt.config.ts
    image: {
        providers: {
            interventionRequest: {
                options: {
                    noProcessBaseUrl: 'https://example.com/images'
                }
            }
        }
    }
```

### imagesPath (see [InterventionRequest configuration](https://github.com/ambroisemaupate/intervention-request#configuration))

- As a runtime config variable (preferred)
```dotenv
#.env
NUXT_PUBLIC_INTERVENTION_REQUEST_IMAGES_PATH=images
```

```js
    // nuxt.config.ts
    image: {
        providers: {
            interventionRequest: {
                options: {
                    imagesPath: 'images'
                }
            }
        }
    }
```



## Operations available
See [InterventionRequest operations](https://github.com/ambroisemaupate/intervention-request#available-operations)

## Contributing

1. Clone this repository
2. Install dependencies using `npm install`
3. Start Docker server ([InterventionRequest](https://github.com/ambroisemaupate/intervention-request#ready-to-go-docker-image)) using `docker-compose up -d`
4. Start development server using `npm run dev`

## Publishing

```shell
npm run release
```
