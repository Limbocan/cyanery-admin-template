<template>
  <div
    :class="buttonClass"
    :style="buttonStyle"
    @click="clickBtn"
  >
    <slot name="default">
      <span>{{ buttonLabel }}</span>
    </slot>
    <div class="spinner" />
  </div>
</template>

<script setup>
import { reactive, computed, useAttrs } from 'vue'
import { formatStyleProp } from '@/utils/config'
import { buttonTheme, buttonType, buttonSize } from './button-setting'

const props = defineProps({
  theme: { type: String, default: 'primary' },
  type: { type: String, default: 'default' },
  class: { type: String || Array, default: '' },
  size: { type: String, default: 'small' },
  label: { type: String, default: '按钮' },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  roles: { type: Array, default: () => ['*'] }
})
const attrs = useAttrs()

const state = reactive({
  loading: false,
  disabled: props.disabled
})

// 按钮文字
const buttonLabel = computed(() => {
  if (props.label !== '按钮') return props.label
  switch (props.type) {
    case 'search': return '查询'
    case 'reset': return '重置'
    case 'add': return '新增'
    case 'edit': return '编辑'
    case 'delete': return '删除'
    case 'detail': return '详情'
    case 'back': return '返回'
    case 'close': return '关闭'
    default: return props.label
  }
})

// 按钮样式类
const buttonClass = computed(() => {
  const customClass = typeof props.class === 'string' ? props.class.split(' ') : props.class
  return {
    'cy-button': true,
    'zoom-out-loading': true,
    'button-loading': state.loading,
    'button-disabled': props.disabled || state.disabled,
    [buttonType[props.type]]: true,
    [customClass]: true
  }
})

// 按钮样式属性
const buttonStyle = computed(() => {
  const styleProp = {
    ...buttonTheme[props.theme],
    cyButtonSize: buttonSize[props.size]
  }
  const style = {}
  Object.keys(styleProp).forEach(prop => { style[formatStyleProp(prop)] = styleProp[prop] })
  return style
})

// 按钮点击方法
const clickBtn = () => {
  if (attrs.onClick) {
    const isPr = attrs.onClick(state)
    if (isPromise(isPr)) {
      state.loading = true
      isPr.then(() => (state.loading = false)).catch(err => {
        state.loading = false
        return JSON.stringify(err)
      })
    }
  }
}
const isPromise = (p) => p && typeof p.then === 'function'

</script>

<script>
export default {
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.cy-button {
  --cy-button-size: 32px;

  position: relative;
  display: inline-block;
  padding: 0 12px;
  height: var(--cy-button-size);
  line-height: var(--cy-button-size);
  color: var(--cy-button-label-color);
  background-color: var(--cy-button-background-color);
  overflow: hidden;
  transition: all .2s ease-in-out;
  cursor: pointer;
}
.cy-button + .cy-button {
  margin-left: 8px;
}
</style>
