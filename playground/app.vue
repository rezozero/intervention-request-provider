<template>
    <div>
        <figure>
            <figcaption>Original image:</figcaption>
            <NuxtPicture src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Resampled image:</figcaption>
            <NuxtPicture width="200" src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Resampled image with forced height:</figcaption>
            <NuxtPicture width="200" height="200" src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Native image:</figcaption>
            <NuxtPicture src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Cropped image:</figcaption>
            <NuxtPicture :modifiers="{ crop: '1:1' }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Fitted image:</figcaption>
            <NuxtPicture fit="50x50" src="opera.webp" />
            <NuxtPicture fit="50x150" :modifiers="{ align: 'lb' }" src="opera.webp" />
            <NuxtPicture fit="50x150" :modifiers="{ align: 'b' }" src="opera.webp" />
            <NuxtPicture fit="50x150" :modifiers="{ align: 'rb' }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Bad fitted image:</figcaption>
            <NuxtPicture fit="invalid" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Contrasted image:</figcaption>
            <NuxtPicture :modifiers="{ contrast: 10 }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Flipped image:</figcaption>
            <NuxtPicture :modifiers="{ flip: 'v' }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Greyscaled image:</figcaption>
            <NuxtPicture :modifiers="{ grayscale: true }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>No process image:</figcaption>
            <NuxtPicture :modifiers="{ noProcess: true }" src="opera.webp" />
        </figure>

        <figure>
            <figcaption>Avif format:</figcaption>
            <NuxtPicture format="avif" src="rhino.jpg" />
        </figure>

        <figure>
            <figcaption>Jpeg format prop with jpg image:</figcaption>
            <NuxtPicture format="jpeg" src="rhino.jpg" />
        </figure>
    </div>
</template>

<style lang="css">
figure {
    display: block;
    margin: 1rem 0;
    padding: 0;
    border: 0;
}

figcaption {
    display: block;
}
</style>
