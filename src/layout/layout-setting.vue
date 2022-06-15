<template>
  <cy-drawer
    v-model="state.show"
    title="系统设置"
    size="360px"
  >
    <div class="setting-box">
      <h6 class="setting-title">
        布局模式
      </h6>
      <div class="setting-laout-group">
        <label
          v-for="layout in layoutList"
          :key="layout.name"
        >
          <input
            v-model="systermConfig.layout"
            :value="layout.name"
            type="radio"
            name="layout"
            class="hidden-radio"
          >
          <div :class="['layout-box', layout.class, systermConfig.layout === layout.name ? 'active-layout' : '']">
            <div class="preview-menu" />
            <div class="preview-header" />
          </div>
        </label>
      </div>
      <h6 class="setting-title">
        系统主题
      </h6>
      <div class="setting-theme-group">
        <label
          v-for="theme in themeList"
          :key="theme.name"
        >
          <input
            v-model="systermConfig.theme"
            :value="theme.name"
            type="radio"
            name="theme"
            class="hidden-radio"
          >
          <div>{{ theme.name }}</div>
        </label>
      </div>
    </div>
  </cy-drawer>
</template>

<script setup>
import { reactive } from 'vue'
import {
  systermConfig,
  layoutList as allLayout,
  themeList as allTheme
} from '@/utils/config'

const state = reactive({
  show: false
})

const layoutList = allLayout.map(l => ({ name: l, class: l + '-preview' }))
const themeList = allTheme.map(t => ({ name: t }))

const openDrawer = () => { state.show = true }

defineExpose({
  openDrawer
})

</script>

<style lang="scss" scoped>
.setting-box {
  height: 100%;
  width: 100%;
  padding: 12px;

  .setting-title {
    color: #000000d9;
  }
  .hidden-radio {
    width: 0;
    height: 0;
  }

  .setting-laout-group {
    display: flex;
    justify-content: space-around;
    padding: 16px 8px;
    .layout-box {
      position: relative;
      display: inline-block;
      width: 64px;
      height: 64px;
      overflow: hidden;
      background-color: var(--content-bg-color);
      border-radius: 8px;
      box-shadow: 0 0 4px 0px #0000000f;
      cursor: pointer;

      &.active-layout {
        box-shadow: 0 0 4px 2px var(--header-color);
      }
      .preview-menu {
        position: absolute;
        background-color: rgb(20, 60, 95);
      }
      .preview-header {
        position: absolute;
        background-color: var(--header-bg-color);
      }

      &.layout-top-preview {
        .preview-menu {
          left: 0;
          right: 70%;
          top: 20%;
          bottom: 0;
        }
        .preview-header {
          top: 0;
          bottom: 80%;
          left: 0;
          right: 0;
        }
      }

      &.layout-left-preview {
        .preview-menu {
          left: 0;
          right: 70%;
          top: 0;
          bottom: 0;
        }
        .preview-header {
          top: 0;
          bottom: 80%;
          left: 30%;
          right: 0;
        }
      }

      &.layout-header-scroll-preview {
        .preview-menu {
          left: 0;
          right: 70%;
          top: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
