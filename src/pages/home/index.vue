<template>
  <div class="h-100vh bg-base-100">
    <h1 class="text-base-100 bg-primary hover:bg-primary-focus transition-colors" @click="titleClick">Title</h1>
  </div>
</template>

<script setup lang="ts" name="home">
import { useRouter } from 'vue-router'

const router = useRouter()

const titleClick = () => {
  router.push({ name: 'dashboard' })
}

</script>

<style scoped></style>
