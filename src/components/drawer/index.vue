<template>
  <transition
    name="drawer"
    mode="out-in"
  >
    <div
      v-show="props.show"
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
        <slot name="title">
          <div class="drawer-title">
            <svg
              class="drawer-title-close"
              @click="close"
            >
              <use xlink:href="#cyanery-CloseDefault" />
            </svg>
            <h4 class="drawer-title-label">
              {{ props.title }}
            </h4>
          </div>
        </slot>
        <slot name="default" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  position: { type: String, default: 'right' },
  maskClose: { type: Boolean, default: true },
  size: { type: String, default: '30%' },
  title: { type: String, default: '' },
  background: { type: String, default: '#fff' }
})

const emits = defineEmits(['update:show'])

const drawerStyle = computed(() => {
  return {
    '--drawer-bg-color': props.background,
    [['top', 'bottom'].includes(props.position) ? '--drawer-content-height' : '--drawer-content-width']: props.size,
    [props.position]: 0
  }
})

const close = () => {
  if (props.maskClose) emits('update:show', false)
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
  }
}
</style>
