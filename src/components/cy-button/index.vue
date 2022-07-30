<template>
  <div
    :class="buttonClass"
    :style="buttonStyle"
    @click="clickBtn"
  >
    <template v-if="props.icon">
      <svg class="cy-button-icon">
        <use :xlink:href="'#cyanery-' + props.icon" />
      </svg>
    </template>
    <slot name="default">
      <span>{{ buttonLabel.label }}</span>
    </slot>
    <div class="spinner" />
  </div>
</template>

<script setup>
import { reactive, computed, useAttrs } from 'vue'
import { formatStyleProp } from '@/utils/config'
import { buttonTheme, buttonType, buttonSize } from './button-setting'

const props = defineProps({
  theme: { type: String, default: 'default' },
  type: { type: String, default: 'default' },
  class: { type: String || Array, default: '' },
  size: { type: String, default: 'small' },
  label: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: '' },
  roles: { type: Array, default: () => ['*'] }
})
const attrs = useAttrs()

const state = reactive({
  loading: props.loading,
  disabled: props.disabled
})

// 按钮文字-对应主题
const buttonLabel = computed(() => {
  if (props.label !== '') return { label: props.label, theme: false }
  switch (props.type) {
    case 'search': return { label: '查询', theme: 'primary' }
    case 'reset': return { label: '重置', theme: 'primary' }
    case 'add': return { label: '新增', theme: 'primary' }
    case 'edit': return { label: '编辑', theme: 'primary' }
    case 'delete': return { label: '删除', theme: 'primary' }
    case 'detail': return { label: '详情', theme: 'primary' }
    case 'back': return { label: '返回', theme: 'primary' }
    case 'close': return { label: '关闭', theme: 'primary' }
    default: return { label: props.label, theme: false }
  }
})

// 按钮样式类
const buttonClass = computed(() => {
  const _style = {
    'cy-button': true,
    'zoom-out-load': true,
    'cy-button-loading': props.loading || state.loading,
    'cy-button-disabled': props.disabled || state.disabled,
    [buttonType[props.type]]: true,
  }
  const customClass = typeof props.class === 'string' ? props.class.split(' ') : props.class
  customClass.forEach(key => (_style[key] = true))
  return _style
})

// 按钮样式属性
const buttonStyle = computed(() => {
  const styleProp = {
    ...buttonTheme[buttonLabel.value.theme || props.theme],
    cyButtonSize: buttonSize[props.size]?.size,
    cyButtonFontSize: buttonSize[props.size]?.font
  }
  const style = {}
  Object.keys(styleProp).forEach(prop => { style[formatStyleProp(prop)] = styleProp[prop] })
  return style
})

// 按钮点击方法
const clickBtn = () => {
  if (props.loading || props.disabled || state.loading || state.disabled) return false
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
  font-size: var(--cy-button-font-size);
  border-radius: 2px;
  overflow: hidden;
  user-select: none;
  transition: all .2s ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    background-color: transparent;
    transition: all .2s ease-in-out;
  }

  &:hover::before {
    opacity: .2;
    background-color: currentColor;
  }

  .cy-button-icon {
    display: inline-block;
    height: var(--cy-button-size);
    width: var(--cy-button-size);
    fill: var(--cy-button-label-color);
    transform: scale(0.6);
  }

  &.cy-button-disabled, &.cy-button-loading {
    cursor: not-allowed;
    &::before {
      background-color: currentColor;
      opacity: 0.5;
    }
  }

  &.cy-button-circle {
    border-radius: 50%;
    width: var(--cy-button-size);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }

  &.cy-button-ghost {
    box-shadow: inset 0 0 0 2px var(--cy-button-background-color);
    border-radius: 24px;
    padding: 0 20px;

    &:not(.cy-button-loading):not(.cy-button-disabled) {
      color: var(--cy-button-background-color);
      background-color: transparent;

      &:hover {
        color: var(--cy-button-label-color);
        background-color: var(--cy-button-background-color);
      }

      &::before {
        background-color: transparent;
      }
    }
  }

  &.cy-button-text {
    color: var(--cy-button-background-color);
    background-color: transparent;
    &:hover {
      text-shadow: 0 0 6px var(--cy-button-background-color);
    }
    &:hover::before, &.cy-button-disabled::before, &.cy-button-loading::before {
      background-color: transparent;
    }
  }

}
.cy-button + .cy-button {
  margin-left: 8px;
}
</style>
