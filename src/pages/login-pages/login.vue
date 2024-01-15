<template>
  <div>
    <CyButton @click="LoginHandler">
      Login
    </CyButton>

    <CyButton @click="requestClick">请求</CyButton>
  </div>
</template>

<script setup lang="ts" name="login">
import { PageConstants } from '@/constants/page-constants'
import { useRouter } from 'vue-router'
import CyaneryFetch from '@/request'

const router = useRouter()

const LoginHandler = () => {
  document.cookie = 'auth=test;'
  router.push(PageConstants.BASE_HOME)
}

const requestClick = () => {
  CyaneryFetch.request<string>({ url: '/api/login/logout', method: 'post' }).then(res => {
    console.log(res, 'result')
  })
}

</script>

<style scoped>

</style>
