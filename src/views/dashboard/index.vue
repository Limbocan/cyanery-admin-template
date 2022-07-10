<template>
  <div class="page-box home-page">
    <div class="grid-box top-info-box box-effect-1">
      <time-show />
      <h2 class="hello-label">
        {{ userState.getUserInfo().username }}，{{ helloText }}好呀~！<br>
        <span class="sentences">人的想法是会变的。以前我也是想致富的，现在只想脱贫😕。</span>
      </h2>
      <div class="hello-right-info">
        <h3 class="right-label">
          代办
        </h3>
        <div>{{ todoInfo }}</div>
      </div>
    </div>
    <div class="grid-box technology-box box-effect-2">
      <technology />
    </div>
    <div class="grid-box todo-box box-effect-2">
      <todo ref="todoRef" />
    </div>
    <div class="grid-box map-box box-effect-2">
      <map-box />
    </div>
    <div class="grid-box chart-box box-effect-2">
      2
    </div>
  </div>
</template>

<script setup name="Dashboard">
import { ref, computed } from 'vue'
import { useUserState } from '@/state/user-state'
import timeShow from './time-show.vue'
import technology from './technology.vue'
import todo from './todo.vue'
import mapBox from './map-box.vue'

const todoRef = ref(null)
const userState = useUserState()
const helloText = [
  { hour: 5, text: '凌晨' },
  { hour: 8, text: '早上' },
  { hour: 12, text: '上午' },
  { hour: 13, text: '中午' },
  { hour: 19, text: '下午' },
  { hour: 24, text: '晚上' }
].find(item => new Date().getHours() < item.hour).text

const todoInfo = computed(() => {
  if (!todoRef.value) return ''
  const _list = todoRef.value.todoList || []
  const _doneNum = _list.filter(t => t.done).length
  return `${_doneNum}/${_list.length}`
})

</script>

<style lang="scss" scoped>
.home-page {
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 4px));
  grid-template-rows: 120px 300px 360px;
  grid-gap: 12px;
  padding-top: 8px;
  border-radius: 20px;
  background-color: transparent !important;

  .grid-box {
    background-color: #fff;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgb(0 0 0 / 0%);
    transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
    &.box-effect-1:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 24px #57585a1f;
    }
    &.box-effect-2:hover {
      box-shadow: 0 0 24px #57585a1f;
    }
  }

  .top-info-box {
    grid-column: span 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    font-family: Microsoft YaHei, sans-serif;
    .hello-label {
      flex: 1;
      margin-left: 20px;
      color: #1890ff;
      line-height: 40px;
      font-weight: 400;

      .sentences {
        color: #000000d9;
        font-size: 16px;
      }
    }
    .hello-right-info {
      padding: 10px 20px;

      .right-label {
        line-height: 50px;
      }
    }
  }

  .technology-box {
    grid-column: span 2;
  }

  .todo-box {
    grid-row: span 2;
  }

  .map-box, .chart-box {
    padding: 10px;
  }

  ::v-deep(.card-title) {
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    font-size: 14px;
    color: #000000d9;
    border-bottom: 1px solid #f0f0f0a3;
  }
}
</style>
