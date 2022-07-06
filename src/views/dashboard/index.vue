<template>
  <div class="page-box home-page">
    <div class="grid-box top-info-box">
      <time-show />
      <h2 class="hello-label">
        {{ userState.getUserInfo().username }}，{{ helloText }}好呀~！<br>
        <span class="sentences">人的想法是会变的。以前我也是想致富的，现在只想脱贫😕。</span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { useUserState } from '@/state/user-state'
import timeShow from './time-show.vue'

const userState = useUserState()
const helloText = [
  { hour: 5, text: '凌晨' },
  { hour: 8, text: '早上' },
  { hour: 12, text: '上午' },
  { hour: 13, text: '中午' },
  { hour: 19, text: '下午' },
  { hour: 24, text: '晚上' }
].find(item => new Date().getHours() < item.hour).text

</script>

<style lang="scss" scoped>
.home-page {
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 2px));
  grid-template-rows: 120px 160px 200px auto;
  grid-gap: 8px;
  border-radius: 20px;
  background-color: transparent !important;

  .grid-box {
    background-color: var(--header-bg-color);
    border-radius: 16px;
    padding: 8px 12px;
    display: inline-block;
    position: relative;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 24px #57585a1f;
    }
  }

  .top-info-box {
    grid-column: span 3;
    display: flex;
    align-items: center;
    .hello-label {
      margin-left: 20px;
      color: var(--main-color);
      line-height: 40px;
      font-family: Microsoft YaHei, sans-serif;
      font-weight: 400;

      .sentences {
        color: var(--header-color);
        font-size: 16px;
      }
    }
  }
}
</style>
