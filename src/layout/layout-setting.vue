<template>
  <drawer
    v-model:show="state.show"
    title="系统设置"
    size="300px"
  >
    <div class="setting-box">
      <h6>主题</h6>
      <el-radio-group v-model="systermConfig.layout">
        <el-radio-button label="layout-top" />
        <el-radio-button label="layout-left" />
        <el-radio-button label="layout-header-scroll" />
      </el-radio-group>
    </div>
  </drawer>
</template>

<script setup>
import { reactive } from 'vue'
import { systermConfig } from '@/utils/config'
import { ElRadioGroup, ElRadioButton } from 'element-plus'

const state = reactive({
  show: false
})

const openDrawer = () => { state.show = true }

defineExpose({
  openDrawer
})

</script>

<style lang="scss" scoped>
.setting-box {
  height: 100%;
  width: 100%;
  padding: 12px;
}
</style>
