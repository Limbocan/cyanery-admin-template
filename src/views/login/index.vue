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
import loginApi from '@/api/login'

const router = useRouter()

const loginClick = () => {
  loginApi.login({ username: 'admin', password: 'admin' }).then(res => {
    router.push({ path: '/home/dashboard' })
  })
  // router.push({ name: 'Home' })
}

</script>

<style lang="scss" scoped>

</style>
