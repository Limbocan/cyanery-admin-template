<template>
  <div>
    role
    <input v-model="value">
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

<script setup name="Role">
import { ref } from 'vue'
import { Collapse, Popover } from 'cyanery-menu'

const show = ref(true)

const value = ref('')

const change = () => (show.value = !show.value)

</script>

<style lang="scss" scoped>

</style>
