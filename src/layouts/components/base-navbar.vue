<template>
  <div class="sticky top-0 z-100 h-16 w-full flex justify-between items-center">
    <Logo />
    <ThemeChange />
    <LocalesChange />
  </div>
</template>

<script setup lang="ts">
import Logo from './logo.vue'
import ThemeChange from './theme-change.vue'
import LocalesChange from './locales-change.vue'

</script>

<style scoped>

</style>
