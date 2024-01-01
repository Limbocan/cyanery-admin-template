<template>
  <div
    ref="triggerRef"
    :class="['cy-dropdown', props.className]"
  >
    <slot name="default"></slot>
    <div
      v-show="contentVisible"
      :class="['cy-dropdown-content', getContentClassName]"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  show: { type: Boolean, default: false },
  trigger: { type: String, default: 'hover' },
  className: { type: String, default: '' },
  closeDelay: { type: Number, default: 400 },
  contentType: { type: String, default: 'list' },
})

const triggerRef = ref<any>(null)
const visible = ref(false)
const isMouseIn = ref<boolean>(false)

const contentVisible = computed(
  () => props.show || visible.value
)

const getContentClassName = computed(
  () => {
    switch (props.contentType) {
      case 'list': return 'cy-dropdown-content-list'
      default: return ''
    }
  }
)

const openVisible = () => {
  visible.value = true
  isMouseIn.value = true
}
const closeVisible = () => {
  visible.value = false
  isMouseIn.value = false
}
const closeTimeout = () => {
  isMouseIn.value = false
  setTimeout(() => {
    if (isMouseIn.value === false) visible.value = false
  }, props.closeDelay)
}
const switchVisible = () => visible.value = !visible.value

const handlerEventerListenr = (eventType = 'addEventListener') => {
  if (!triggerRef.value) return
  switch (props.trigger) {
    case 'hover': {
      triggerRef.value[eventType]('mouseenter', openVisible)
      triggerRef.value[eventType]('mouseleave', closeTimeout)
      break
    }
    case 'click': {
      triggerRef.value[eventType]('click', switchVisible)
      eventType === 'addEventListener' && onClickOutside(triggerRef, closeVisible)
      break
    }
    default: return null
  }
}

onMounted(() => {
  handlerEventerListenr('addEventListener')
})

onUnmounted(() => {
  handlerEventerListenr('removeEventListener')
})

</script>

<style lang="scss" scoped>
.cy-dropdown {
  position: relative;
  cursor: pointer;

  .cy-dropdown-content {
    position: absolute;
    margin-top: .5rem;
    inset-inline-end: 0;

    &::before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: -1rem;
      right: 1rem;
      border-right: 0.5rem solid transparent;
      border-left: 0.5rem solid transparent;
      border-bottom: 0.5rem solid var(--bg-100);
    }

    &.cy-dropdown-content-list {
      padding: .6rem;
      border-radius: .8rem;
      background-color: var(--bg-100);
      box-shadow: 0 0 10px 1px var(--bg-110);
    }
  }
}
</style>
