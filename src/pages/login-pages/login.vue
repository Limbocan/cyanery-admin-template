<template>
  <div @click="LoginHandler">
    Login
  </div>
</template>

<script setup lang="ts" name="login">
import { PageConstants } from '@/constants/page-constants'
import { useRouter } from 'vue-router'

const router = useRouter()

const LoginHandler = () => {
  document.cookie = 'auth=test;'
  router.push(PageConstants.BASE_HOME)
}

</script>

<style scoped>

</style>
@/constants/page-constants
