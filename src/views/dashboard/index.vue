<template>
  <div class="page-box home-page">
    <div class="grid-box top-info-box">
      <h2>{{ userState.getUserInfo().username }}，{{ helloText }}好！</h2>
      <h4>{{ localTime }}</h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserState } from '@/state/user-state'

const userState = useUserState()
const helloText = [
  { hour: 5, text: '凌晨' },
  { hour: 8, text: '早上' },
  { hour: 12, text: '上午' },
  { hour: 13, text: '中午' },
  { hour: 19, text: '下午' },
  { hour: 24, text: '晚上' }
].find(item => new Date().getHours() < item.hour).text
const localTime = computed(() => new Date().toLocaleString())

</script>

<style lang="scss" scoped>
.home-page {
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 2px));
  grid-template-rows: 100px 160px 200px auto;
  grid-gap: 8px;
  border-radius: 20px;
  background-color: transparent !important;

  .grid-box {
    background-color: var(--header-bg-color);
    border-radius: 16px;
    padding: 8px 16px;
  }

  .top-info-box {
    grid-column: span 3;
  }
}
</style>
