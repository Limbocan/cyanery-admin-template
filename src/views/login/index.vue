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
import { homePath } from '@/utils/config'
import { useUserState } from '@/state/user-state'

const userState = useUserState()
const router = useRouter()

const loginClick = () => {
  userState.login({ username: 'admin', password: 'admin' }).then(res => {
    router.push({ path: homePath })
  })
}

</script>

<style lang="scss" scoped>

</style>
