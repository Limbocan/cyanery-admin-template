<template>
  <teleport
    :disabled="!props.toBody"
    to="body"
  >
    <transition
      name="drawer"
      mode="out-in"
    >
      <div
        v-show="props.modelValue"
        class="drawer-wrapper"
      >
        <div
          class="mask"
          @click="close"
        />
        <div
          :style="drawerStyle"
          :class="['drawer-content', ['top', 'bottom'].includes(props.position) ? 'drawer-column' : 'drawer-row']"
        >
          <slot name="header">
            <div class="drawer-title">
              <svg
                class="drawer-title-close"
                @click="close"
              >
                <use xlink:href="#cyanery-CloseDefault" />
              </svg>
              <h5 class="drawer-title-label">
                {{ props.title }}
              </h5>
            </div>
          </slot>
          <div class="drawer-body">
            <slot name="default" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  position: { type: String, default: 'right' }, // 弹出位置
  maskClose: { type: Boolean, default: true }, // 是否点击遮罩关闭
  toBody: { type: Boolean, default: false }, // 是否挂载到body元素下
  size: { type: String, default: '30%' },
  title: { type: String, default: '' },
  background: { type: String, default: '#fff' }
})

const emits = defineEmits(['update:modelValue'])

const drawerStyle = computed(() => {
  return {
    '--drawer-bg-color': props.background,
    [['top', 'bottom'].includes(props.position) ? '--drawer-content-height' : '--drawer-content-width']: props.size,
    [props.position]: 0
  }
})

watch(
  () => props.modelValue,
  (val) => {
    const _body = document.querySelector('body')
    if (val) _body.classList.add('body-lock-scroll')
    else _body.classList.remove('body-lock-scroll')
  }
)

const close = () => {
  if (props.maskClose) emits('update:modelValue', false)
}

</script>

<style lang="scss" scoped>
.drawer-wrapper {
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .mask {
    width: 100%;
    height: 100%;
    background-color: #00000073;
  }

  .drawer-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--drawer-bg-color);
    overflow: hidden;

    &.drawer-row {
      top: 0;
      bottom: 0;
      width: var(--drawer-content-width);
    }
    &.drawer-column {
      left: 0;
      right: 0;
      height: var(--drawer-content-height);
    }

    .drawer-title {
      padding: 12px;
      display: flex;
      align-items: center;
      box-shadow: 0 0 4px 0px #00000017;

      &-close {
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &:hover {
          fill: var(--header-color);
        }
      }

      &-label {
        display: inline-block;
        margin-left: 12px;
      }
    }

    .drawer-body {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
