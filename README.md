# intervention-request-provider
[InterventionRequest](https://github.com/ambroisemaupate/intervention-request) provider for [@nuxt/image](https://github.com/nuxt/image)

## Installation

```sh
yarn add -D @rezo-zero/intervention-request-provider
```
or
```sh
npm install -D @rezo-zero/intervention-request-provider
```


Add the provider to @nuxt/image module as described [here](https://image.nuxtjs.org/advanced/custom-provider).

## Setup

### baseUrl

- As a runtime config variable (preferred)

nuxt.config
```js
    publicRuntimeConfig: {
        interventionRequest: {
          baseUrl: 'http://localhost'
        }
    }
```

or

- As a @nuxt/image provider option

nuxt.config
```js
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

### imagesPath (see [InterventionRequest doc](https://github.com/ambroisemaupate/intervention-request#configuration))

nuxt.config.ts
```js
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
See [InterventionRequestions operations](https://github.com/ambroisemaupate/intervention-request#available-operations)

## Contributing

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start Docker server ([InterventionRequest](https://github.com/ambroisemaupate/intervention-request#ready-to-go-docker-image)) using `docker-compose up -d`
3. Start development server using `yarn dev`
