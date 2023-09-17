<template>
  <div class="font-chinese antialiased min-h-screen">
    <div class="min-h-screen">
      <Navbar />
      <keepAlives />
    </div>
  </div>
</template>

<script setup lang="ts">
import keepAlives from '@/components/keep-alives.vue'
import Navbar from './components/base-navbar.vue'
</script>

<style scoped>

</style>
