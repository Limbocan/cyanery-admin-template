<template>
  <el-config-provider
    :size="state.size"
    :z-index="state.zIndex"
    :locale="state.locale"
  >
    <keep-alives />
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const state = reactive({
  size: 'default',
  zIndex: 3000,
  locale: zhCn
}) as any

</script>

<style>
</style>
