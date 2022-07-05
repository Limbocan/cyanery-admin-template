<template>
  <div class="login-content">
    <div class="login-page">
      <div class="login-box">
        <div
          class="square"
          style="--i:0;"
        />
        <div
          class="square"
          style="--i:1;"
        />
        <div
          class="square"
          style="--i:2;"
        />
        <div
          class="square"
          style="--i:3;"
        />
        <div
          class="square"
          style="--i:4;"
        />
        <div
          class="square"
          style="--i:5;"
        />
        <div class="container">
          <div
            class="login-form"
            @keyup.enter="loginClick"
          >
            <h2 class="login-title">
              Cyanery Admin
            </h2>
            <div class="input-box">
              <cy-input
                v-model="loginForm.username"
                label="用户名"
              />
            </div>
            <div class="inputBx password">
              <cy-input
                v-model="loginForm.password"
                type="password"
                label="密码"
              />
            </div>
            <div
              v-loading="loading"
              class="login-button"
              @click="loginClick"
            >
              登录
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { pageConfig } from '@/utils/config'
import { useUserState } from '@/state/user-state'
import { vLoading } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import message from '@/utils/message'

const userState = useUserState()
const router = useRouter()

const loginForm = reactive({
  username: 'admin',
  password: 'admin',
})
const loading = ref(false)

const loginClick = () => {
  if (loading.value) return
  if (!loginForm.username || !loginForm.password) {
    message.error('请输入用户名和密码！')
    return
  }
  loading.value = true
  userState.login(loginForm).then(res => {
    router.push({ path: pageConfig.homePath })
    loading.value = false
  }).catch(err => {
    message.error(err)
    loading.value = false
  })
}

</script>

<style lang="scss" scoped>

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  .login-box {
    position: relative;
    .square {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 15px;
      animation: square 10s linear infinite;
      animation-delay: calc(-1s * var(--i));

      &:nth-child(1) {
        width: 100px;
        height: 100px;
        top: -15px;
        right: -45px;
      }

      &:nth-child(2) {
        width: 150px;
        height: 150px;
        top: 105px;
        left: -125px;
        z-index: 2;
      }

      &:nth-child(3) {
        width: 60px;
        height: 60px;
        bottom: 85px;
        right: -45px;
        z-index: 2;
      }

      &:nth-child(4) {
        width: 50px;
        height: 50px;
        bottom: 35px;
        left: -95px;
      }

      &:nth-child(5) {
        width: 50px;
        height: 50px;
        top: -15px;
        left: -25px;
      }

      &:nth-child(6) {
        width: 85px;
        height: 85px;
        top: 165px;
        right: -155px;
        z-index: 2;
      }
    }

    .container {
      position: relative;
      padding: 50px 40px 20px 50px;
      width: 320px;
      min-height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);

      &::after {
        content: "";
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border-radius: 5px;
        pointer-events: none;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 2%);
      }

      .login-form {
        position: relative;
        width: 100%;
        height: 100%;

        .login-title {
          color: #fff;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .input-box {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
        }

        .login-button {
          --el-loading-spinner-size: 26px;
          margin-top: 40px;
          padding: 8px 16px;
          border-radius: 16px;
          color: #fff;
          text-align: center;
          font-size: 14px;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 15px #0000000d;
          transition: background .2s ease-in-out;
          user-select: none;
          box-shadow: inset 0 0 0 2px #fff;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes square {
  0%, 100% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
}
</style>
