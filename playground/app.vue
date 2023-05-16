<template>
    <div>
        <figure>
            <figcaption>Original image:</figcaption>
            <nuxt-picture src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Resampled image:</figcaption>
            <nuxt-picture width="200" src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Resampled image with forced height:</figcaption>
            <nuxt-picture width="200" height="200" src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Native image:</figcaption>
            <nuxt-picture src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Cropped image:</figcaption>
            <nuxt-picture :modifiers="{crop: '1:1'}" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Fitted image:</figcaption>
            <nuxt-picture fit="50x50" src="opera.webp" />
            <nuxt-picture fit="50x150" :modifiers="{align: 'lb'}" src="opera.webp" />
            <nuxt-picture fit="50x150" :modifiers="{align: 'b'}" src="opera.webp" />
            <nuxt-picture fit="50x150" :modifiers="{align: 'rb'}" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Bad fitted image:</figcaption>
            <nuxt-picture fit="invalid" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Contrasted image:</figcaption>
            <nuxt-picture :modifiers="{contrast: 10}" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Flipped image:</figcaption>
            <nuxt-picture :modifiers="{flip: 'v'}" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Greyscaled image:</figcaption>
            <nuxt-picture :modifiers="{grayscale: true}" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>No process image:</figcaption>
            <nuxt-picture :modifiers="{noProcess: true}" src="opera.webp" />
        </figure>
    </div>
</template>
<script setup></script>
<style lang="css">
figure {
    display: block;
    margin: 1rem 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
figcaption {
    display: block;
}
</style>
