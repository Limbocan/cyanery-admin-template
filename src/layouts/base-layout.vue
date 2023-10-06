<template>
  <div class="base-layout-root bg-base-100 font-chinese antialiased h-full overflow-y-auto">
    <Navbar />
    <keepAlives />
  </div>
</template>

<script setup lang="ts">
import keepAlives from '@/components/keep-alives.vue'
import Navbar from './components/base-navbar.vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'data-theme',
  modes: {},
})

console.log(mode)
</script>

<style scoped>
.base-layout-root {
  --base-layout-header-height: 3.5rem;
}
</style>
