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
      >
        <use xlink:href="#cyanery-caidanzhankai" />
      </svg>
      <svg
        v-show="collapse"
        class="svg-icon"
      >
        <use xlink:href="#cyanery-caidanshouqi" />
      </svg>
    </div>

    <div class="header-right">
      <div class="header-item">
        <svg class="header-icon circle-icon bg-icon">
          <use xlink:href="#cyanery-huihua" />
        </svg>
      </div>
      <div class="header-item">
        <svg class="header-icon circle-icon bg-icon">
          <use xlink:href="#cyanery-shezhi1" />
        </svg>
      </div>
      <div class="header-item">
        <svg class="header-icon circle-icon bg-icon">
          <use xlink:href="#cyanery-wode" />
        </svg>
      </div>
      <div class="header-item">
        <svg class="header-icon circle-icon bg-icon">
          <use xlink:href="#cyanery-tuichu" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useMenuState } from '@/state/menu-state'
import logo from './logo.vue'

const menuState = useMenuState()
const collapse = computed(() => menuState.getCollapse())

// 侧边栏折叠
const collapseChage = () => {
  menuState.setCollapse(!collapse.value)
}

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

</script>
