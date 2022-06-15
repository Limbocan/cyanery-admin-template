<template>
  <div>
    role
    <button @click="change">
      切换
    </button>
    <collapse>
      <div v-show="show">
        <div
          v-for="item in 100"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </collapse>
    <popover>
      <template #trigger>
        <span>test</span>
      </template>
      <template #content>
        789
      </template>
    </popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse, Popover } from 'cyanery-menu'
console.log(Collapse)

const show = ref(true)

const change = () => (show.value = !show.value)

</script>

<style lang="scss" scoped>

</style>
