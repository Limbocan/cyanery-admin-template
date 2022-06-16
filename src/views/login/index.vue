<template>
  <div>
    login
    <button @click="loginClick">
      登录
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const loginClick = () => {
  router.push({ path: '/home/dashboard' })
  // router.push({ name: 'Home' })
}

</script>

<style lang="scss" scoped>

</style>
