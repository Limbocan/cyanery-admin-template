<template>
  <div style="height: 800px;">
    dashborad
    <button @click="change">
      切换
    </button>
    <cy-drawer
      v-model="show"
      :to-body="false"
      title="系统设置"
      size="360px"
    >
      test
    </cy-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const change = () => (show.value = !show.value)

</script>

<style lang="scss" scoped>

</style>
