# intervention-request-provider
[InterventionRequest](https://github.com/ambroisemaupate/intervention-request) provider for [@nuxt/image-edge](https://github.com/nuxt/image)

This library is built for **Nuxt 3**.

## Installation

```sh
yarn add @rezo-zero/intervention-request-provider@next
```
or
```sh
npm install @rezo-zero/intervention-request-provider@next
```


Add the provider to @nuxt/image module as described [here](https://image.nuxtjs.org/advanced/custom-provider).

```ts
    // nuxt.config.ts
    runtimeConfig: {
        public: {
            interventionRequest: {
                baseUrl: process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_BASE_URL ?? 'http://localhost:8080/assets',
                noProcessBaseUrl: process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_NO_PROCESS_BASE_URL ?? 'http://localhost:8080/images',
                imagesPath: 'images'
            }
        }
    }
    image: {
        provider: 'interventionRequest',
        providers: {
            interventionRequest: {
                name: 'interventionRequest',
                provider: '~/node_modules/@rezo-zero/intervention-request-provider/dist/index.js', 
                options: {
                    imagesPath: 'images'
                }
            }
        }
    }
```

## Setup

### baseUrl

- As a runtime config variable (preferred)

```js
    // nuxt.config.ts
    runtimeConfig: {
        public: {
            interventionRequest: {
                baseUrl: process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_BASE_URL ?? 'http://localhost'
            }
        }
    }
```

- As a @nuxt/image provider option

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

```js
    // nuxt.config.ts
    runtimeConfig: {
        public: {
            interventionRequest: {
                noProcessBaseUrl: process.env.NUXT_PUBLIC_INTERVENTION_REQUEST_NO_PROCESS_BASE_URL ?? 'http://localhost/images'
            }
        }
    }
```

- As a @nuxt/image provider option

```js
    // nuxt.config.ts
    image: {
        providers: {
            interventionRequest: {
                options: {
                    noProcessBaseUrl: 'http://localhost/images'
                }
            }
        }
    }
```

### imagesPath (see [InterventionRequest configuration](https://github.com/ambroisemaupate/intervention-request#configuration))

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
2. Install dependencies using `yarn install`
3. Start Docker server ([InterventionRequest](https://github.com/ambroisemaupate/intervention-request#ready-to-go-docker-image)) using `docker-compose up -d`
4. Start development server using `yarn dev`
