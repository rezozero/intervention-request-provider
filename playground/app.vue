<template>
  <div>
    <nuxt-picture src="rhino.jpg" />
    <nuxt-picture src="opera.webp" />
    <nuxt-picture src="opera.webp" :modifiers="{ noProcess: true }" />
  </div>
</template>
<script setup></script>
