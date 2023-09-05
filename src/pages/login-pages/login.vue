<template>
  <div @click="LoginHandler">
    Login
  </div>
</template>

<script setup lang="ts" name="login">
import { PageConstant } from '@/config/constant'
import { useRouter } from 'vue-router'

const router = useRouter()

const LoginHandler = () => {
  document.cookie = 'auth=test;'
  router.push(PageConstant.BASE_HOME)
}

</script>

<style scoped>

</style>
