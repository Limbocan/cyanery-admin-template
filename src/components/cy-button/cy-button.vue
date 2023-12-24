<template>
  <button
    :loading="btnLoading"
    :disabled="props.disabled"
    class="cy-button"
    @click="clickFn"
  >
    <slot name="default">
      <div>{{ btnLoading ? 'loading' : '' }}</div>
      {{ props.label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({
  name: 'CyButton',
})

const props = defineProps({
  label: { type: String, default: '' },
  type: { type: String, default: '' },
  size: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  onClick: { type: Function, default: () => { } }
})

const _btnLoading = ref(false)
const btnLoading = computed(() => props.loading || _btnLoading.value)

const clickFn = () => {
  if (typeof props.onClick !== 'function' || props.disabled || btnLoading.value || props.loading) return

  const clickReturn = props.onClick()
  if (typeof clickReturn?.finally === 'function') {
    _btnLoading.value = true
    clickReturn.finally(() => {
      _btnLoading.value = false
    })
  }
}

</script>

<style lang="scss" scoped>
.cy-button {
  padding: 0 1rem;
  line-height: 2;
  border-radius: .4rem;
  color: var(--primary-300);
  background-color: var(--primary-100);
}
</style>
