<template>
  <div
    ref="rightClickRef"
    class="right-click-template"
    @contextmenu.prevent="openMenu($event)"
  >
    <slot name="default" />
  </div>
  <teleport to="body">
    <div
      v-show="state.visible"
      ref="rightContentRef"
      :style="{ left: state.left + 'px', top: state.top + 'px' }"
      class="right-click-content"
    >
      <slot name="right" />
    </div>
  </teleport>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue'

const props = defineProps({
  disabled: { type: Boolean, default: false }
})
const rightClickRef = ref(null)
const rightContentRef = ref(null)
const state = reactive({
  visible: false,
  top: 0,
  left: 0,
})

const openMenu = (e) => {
  if (props.disabled) return
  const offsetX = e.clientX // 鼠标与点击DOM偏移X距离
  const offsetY = e.clientY // 鼠标与点击DOM偏移Y距离

  const winHeight = window.innerHeight // 窗口高度
  const winWidth = window.innerWidth // 窗口宽度
  const positionX = e.clientX // 鼠标点击X位置-相对窗口坐标
  const positionY = e.clientY // 鼠标点击Y位置-相对窗口坐标
  /**
   * 父DOMposition:relative 菜单absolute 采用offset位置 滚动时菜单跟随
   * 菜单position:fixed 采用 e.clientX 相对窗口位置 滚动保持在窗口内
   */
  state.left = positionX
  state.top = positionY
  // 展示菜单
  state.visible = true
  // dom展示后计算dom宽高->重新定位
  nextTick(() => {
    const domHeight = rightContentRef.value.offsetHeight // 菜单dom高度
    const domWidth = rightContentRef.value.offsetWidth // 菜单dom宽度
    if (positionX + domWidth > winWidth) state.left = offsetX - domWidth
    if (positionY + domHeight > winHeight) state.top = offsetY - domHeight
  })
}
const closeMenu = () => {
  state.visible = false
}

watch(
  () => state.visible,
  (value) => {
    if (value) {
      document.body.addEventListener('mouseup', closeMenu)
    } else {
      document.body.removeEventListener('mouseup', closeMenu)
    }
  }
)
</script>

<style lang="scss" scoped>

.right-click-template {
  display: inline;
}

.right-click-content {
  margin: 0;
  z-index: 3000;
  position: fixed;
}
</style>
