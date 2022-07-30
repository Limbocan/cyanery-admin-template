<template>
  <div class="page-box component-button">
    <div class="box-card">
      <h3>状态</h3>
      <div class="card-show">
        <cy-button
          label="正常"
          @click="changeStatus('disabled', false), changeStatus('loading', false)"
        />
        <cy-button
          label="禁用"
          @click="changeStatus('disabled', true)"
        />
        <cy-button
          label="loading"
          @click="changeStatus('loading', true)"
        />
      </div>
    </div>
    <div class="box-card">
      <h3>尺寸</h3>
      <div class="card-show">
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          size="mini"
          label="mini"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          size="small"
          label="small"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          size="large"
          label="large"
          @click="loadingClick"
        />
      </div>
    </div>
    <div class="box-card">
      <h3>主题</h3>
      <div class="card-show">
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          theme="default"
          label="default"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          theme="primary"
          label="primary"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          theme="success"
          label="success"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          theme="warning"
          label="warning"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          theme="error"
          label="error"
          @click="loadingClick"
        />
      </div>
    </div>
    <div class="box-card">
      <h3>类型</h3>
      <div class="card-show">
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          type="default"
          label="default"
          theme="primary"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          type="circle"
          icon="Moon-Star"
          theme="primary"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          type="round"
          label="round"
          theme="primary"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          type="ghost"
          label="ghost"
          theme="primary"
          @click="loadingClick"
        />
        <cy-button
          :disabled="state.disabled"
          :loading="state.loading"
          type="text"
          theme="primary"
          label="text"
          @click="loadingClick"
        />
      </div>
    </div>
    <div class="box-card">
      <h3>状态控制</h3>
      <div class="card-show">
        <cy-button
          label="Promise"
          theme="success"
          @click="apiPromist"
        />
        <cy-button
          label="Async"
          theme="success"
          @click="promiseeClick"
        />
        <cy-button
          label="参数控制Loading"
          theme="success"
          @click="loadingClick($event, '其他参数')"
        />
        <cy-button
          label="参数控制Disabled"
          theme="success"
          @click="disabledClick($event, '其他参数')"
        />
      </div>
    </div>
  </div>
</template>

<script setup name="Button">
import { reactive } from 'vue'

const state = reactive({
  disabled: false,
  loading: false,
})

const changeStatus = (type, val) => {
  state[type] = val
}

const loadingClick = (btn) => {
  btn.loading = true
  setTimeout(() => (btn.loading = false), 2000)
}

const disabledClick = (btn, e) => {
  console.log(e)
  btn.disabled = true
  setTimeout(() => (btn.disabled = false), 2000)
}

// async函数（promise/模拟接口请求）
const promiseeClick = async () => {
  await apiPromist()
}

// 直接返回promise
const apiPromist = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      // reject(new Error())
    }, 2000)
  })
}

</script>

<style lang="scss" scoped>
.component-button {
  padding: 12px;

  .box-card {
    padding: 8px;
    box-shadow: 0 0 1px 1px #f0f0f0;
    border-radius: 4px;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 0 0 2px 2px #00000029;
    }

    .card-show {
      margin: 10px 0;
    }
  }

  .box-card + .box-card {
    margin-top: 12px;
  }
}
</style>
