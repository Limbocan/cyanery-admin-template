<template>
  <div :class="{ 'layout-header': true, 'collapse-header': !collapse }">
    <logo v-show="['layout-top'].includes(systermConfig.layout)" />
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

    <div class="header-center">
      <layout-tag v-if="systermConfig.tagPosition === 'header'" />
    </div>

    <div class="header-right">
      <div class="header-item">
        <svg
          class="header-icon circle-icon"
          @click="openSetting"
        >
          <use xlink:href="#cyanery-shezhi1" />
        </svg>
      </div>
      <div class="header-item">
        <svg class="header-icon circle-icon">
          <use xlink:href="#cyanery-wode" />
        </svg>
      </div>
      <div class="header-item">
        <svg class="header-icon circle-icon">
          <use xlink:href="#cyanery-tuichu" />
        </svg>
      </div>
    </div>
    <layout-setting ref="layoutSettingRef" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useMenuState } from '@/state/menu-state'
import { systermConfig } from '@/utils/config'
import layoutTag from '../layout-tag/index.vue'
import logo from './logo.vue'
import layoutSetting from '../layout-setting.vue'

const layoutSettingRef = ref(null)
const menuState = useMenuState()
const collapse = computed(() => menuState.getCollapse())

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

// 侧边栏折叠
const collapseChage = () => {
  menuState.setCollapse(!collapse.value)
}

// 打开设置
const openSetting = () => {
  layoutSettingRef.value.openDrawer()
}

</script>
