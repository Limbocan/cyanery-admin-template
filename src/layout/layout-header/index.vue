<template>
  <div class="layout-header">
    <logo />
    <!-- 折叠按钮 -->
    <div
      class="collapse-btn"
      @click="collapseChage"
    >
      <svg
        v-show="!collapse"
        class="svg-icon"
        aria-hidden="true"
      >
        <use xlink:href="#cyanery-fenlei" />
      </svg>
      <svg
        v-show="collapse"
        class="svg-icon"
        aria-hidden="true"
      >
        <use xlink:href="#cyanery-shezhi" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { menuState } from '@/state/menu-state'
import logo from './logo.vue'

const useMenuState = menuState()
const collapse = computed(() => useMenuState.getCollapse())
// 侧边栏折叠
const collapseChage = () => {
  useMenuState.setCollapse(!collapse.value)
}

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

// 用户名下拉菜单选择事件
// const router = useRouter()
</script>

<style lang="scss" scoped>
// 展开/收起菜单 按钮
.collapse-btn {
  float: left;
  width: var(--header-height);
  height: var(--header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .svg-icon {
    width: 60%;
    height: 60%;
    fill: #fff;
  }
}

// logo
.logo {
  float: left;
  width: var(--menu-width);
  line-height: var(--header-height);
}

// 右边工具栏
.header-right {
  float: right;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-right: 16px;

  .header-item {
    height: calc(var(--header-height) * 0.6);
    width: calc(var(--header-height) * 0.6);
  }

  .header-item+.header-item {
    margin-left: 16px;
  }
}
</style>
