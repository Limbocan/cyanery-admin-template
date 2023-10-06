<template>
  <div class="base-layout-header sticky top-0 z-100 h-16 w-full flex justify-between items-center bg-base-200 opacity-90 backdrop-blur transition-all duration-100">
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
.base-layout-header {
  height: var(--base-layout-header-height);
}
</style>
