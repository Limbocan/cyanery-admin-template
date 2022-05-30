<template>
  <router-view
    ref="viewRef"
    v-slot="{ Component }"
  >
    <transition
      :name="props.animation"
      mode="out-in"
    >
      <keep-alive
        ref="keepRef"
      >
        <component
          :is="Component"
          ref="comRef"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  animation: {
    type: String,
    default: 'fade'
  }
})

const viewRef = ref(null)
const keepRef = ref(null)
const comRef = ref(null)

</script>

<style lang="scss" scoped>

</style>
