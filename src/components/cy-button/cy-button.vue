<template>
  <button :loading="btnLoading" :disabled="props.disabled" class="cy-button primary" @click="clickFn">
    <!-- <div v-show="btnLoading" class="cy-button-loader"></div> -->
    <div class="cy-button-loader"></div>
    <slot name="default">
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
  --cy-button-size: 1rem;

  position: relative;
  padding: calc(var(--cy-button-size) * 0.5) var(--cy-button-size);
  line-height: var(--cy-button-size);
  border-radius: calc(var(--cy-button-size) * 0.6);
  text-align: center;

  .cy-button-loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: calc(var(--cy-button-size) * 0.6);

    &::before {
      content: '';
      display: inline-block;
      width: var(--cy-button-size);
      height: var(--cy-button-size);
      border: calc(var(--cy-button-size) * 0.6) solid var(--primary-120);
      border-top-color: var(--primary-110);
      animation: cyBtnLoading 1s linear infinite;
      border-radius: 100%;
    }
  }

  @keyframes cyBtnLoading {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
