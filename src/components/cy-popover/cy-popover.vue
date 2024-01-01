<template>
  <div ref="triggerRef" class="cy-popover">
    <slot name="trigger"></slot>
  </div>
  <Teleport :to="props.monut || triggerRef">
    <div v-show="contentVisible" class="cy-popover-content"></div>
    <slot name="content"></slot>
  </Teleport>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const props = defineOptions({
  monut: { type: String || null, default: null },
  show: { type: Boolean, default: false }
})

const triggerRef = ref()

const { isOutside } = useMouseInElement(triggerRef)

const contentVisible = computed(
  () => props.show || !isOutside
)

</script>

<style scoped>
.cy-popover {
  position: relative;
}
</style>
