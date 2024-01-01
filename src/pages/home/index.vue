<template>
  <div class="h-120vh">
    <h1>{{ $t('中文') }}</h1>
    <CyButton label="按钮" @click="clickFn" />
    <h1 v-for="item in 20" :key="item">{{ item }}</h1>
    <h1 class="text-base-100 bg-primary hover:bg-primary-focus transition-colors" @click="titleClick">Title</h1>
  </div>
</template>

<script setup lang="ts" name="home">
import { useRouter } from 'vue-router'
import CyButton from '@/components/cy-button/cy-button.vue'

const router = useRouter()

const clickFn = () => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
      router.push('/theme')
    }, 3000)
  })
  return result
}

const titleClick = () => {
  router.push({ name: 'dashboard' })
}

</script>

<style scoped></style>
