<template>
  <router-view v-slot="{ Component }">
    <!--  -->
    <transition
      :name="props.animation"
      mode="out-in"
    >
      <keep-alive :include="keepAlives">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
import { computed } from 'vue'
import { useTagState } from '@/state/tag-state'

const props = defineProps({
  animation: {
    type: String,
    default: 'fade'
  }
})
const tagState = useTagState()

const keepAlives = computed(() => tagState.getKeepAlive())

</script>

<style lang="scss" scoped>

</style>
