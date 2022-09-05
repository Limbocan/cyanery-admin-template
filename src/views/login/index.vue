<template>
  <div class="login-page">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icons"
    >
      <symbol
        id="icon-arrow-right"
        viewBox="0 0 1792 1792"
      >
        <path
          d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"
        />
      </symbol>
      <symbol
        id="icon-lock"
        viewBox="0 0 1792 1792"
      >
        <path
          d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
        />
      </symbol>
      <symbol
        id="icon-user"
        viewBox="0 0 1792 1792"
      >
        <path
          d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"
        />
      </symbol>
    </svg>
    <div class="grid">
      <div
        class="form login"
        @keyup.enter="loginClick"
      >
        <div class="form__field">
          <label for="login__username"><svg class="icon">
            <use xlink:href="#icon-user" />
          </svg><span class="hidden">Username</span></label>
          <input
            v-model="loginForm.username"
            autocomplete="username"
            type="text"
            name="username"
            class="form__input"
            placeholder="Username"
            required
          >
        </div>

        <div class="form__field">
          <label for="login__password"><svg class="icon">
            <use xlink:href="#icon-lock" />
          </svg><span class="hidden">Password</span></label>
          <input
            v-model="loginForm.password"
            type="password"
            name="password"
            class="form__input"
            placeholder="Password"
            required
          >
        </div>

        <div class="form__field">
          <input
            v-loading="loading"
            type="submit"
            value="登录"
            @click="loginClick"
          >
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
  background-color: #2c3338;
  .align {
    display: grid;
    align-items: center;
    justify-items: center;
    place-items: center;
  }
  .grid {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 20rem;
  }
  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .icons {
    display: none;
  }

  .icon {
    height: 1em;
    display: inline-block;
    fill: #606468;
    fill: #606468;
    width: 1em;
    vertical-align: middle;
  }

  input {
    background-image: none;
    border: 0;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    transition: background-color 0.3s;
  }

  input[type="submit"] {
    cursor: pointer;
  }

  .form {
    display: grid;
    grid-gap: 0.875rem;
    gap: 0.875rem;
  }

  .form input[type="password"],
  .form input[type="text"],
  .form input[type="submit"] {
    width: 100%;
  }

  .form__field {
    display: flex;
  }

  .form__input {
    flex: 1;
  }

  .login {
    color: #eee;
  }

  .login label,
  .login input[type="text"],
  .login input[type="password"],
  .login input[type="submit"] {
    border-radius: 0.25rem;
    border-radius: 0.25rem;
    padding: 1rem;
  }

  .login label {
    background-color: #363b41;
    background-color: #363b41;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .login input[type="password"],
  .login input[type="text"] {
    background-color: #3b4148;
    background-color: #3b4148;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .login input[type="password"]:focus,
  .login input[type="password"]:hover,
  .login input[type="text"]:focus,
  .login input[type="text"]:hover {
    background-color: #434a52;
    background-color: #434a52;
  }

  .login input[type="submit"] {
    background-color: #ea4c88;
    background-color: #ea4c88;
    color: #eee;
    color: #eee;
    font-weight: 700;
    text-transform: uppercase;
  }

  .login input[type="submit"]:focus,
  .login input[type="submit"]:hover {
    background-color: #d44179;
    background-color: #d44179;
  }
}
</style>
