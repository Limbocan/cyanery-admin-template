<template>
  <cy-drawer
    v-model="state.show"
    title="系统设置"
    background="#ebebeb"
    size="320px"
  >
    <div class="setting-box">
      <h5 class="setting-title">
        布局模式
      </h5>
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
            @change="changeSetting('layout', systermConfig.layout)"
          >
          <div :class="['layout-box', layout.class, systermConfig.layout === layout.name ? 'active-box' : '']">
            <div class="preview-menu" />
            <div class="preview-header" />
          </div>
        </label>
      </div>
      <h5 class="setting-title">
        系统主题
      </h5>
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
            @change="changeSetting('theme', systermConfig.theme)"
          >
          <div
            :class="['theme-box', systermConfig.theme === theme.name ? 'active-box' : '']"
            :style="{ '--theme-color': theme.menuBgColor, '--select-color': theme.menuTextColor }"
          >
            <svg
              width="80%"
              height="80%"
              class="theme--check-icon"
            >
              <use :xlink:href="theme.name === 'custom' ? '#cyanery-huihua' : '#cyanery-CheckMark'" />
            </svg>
          </div>
        </label>
      </div>
      <h5
        v-show="systermConfig.theme === 'custom'"
        class="setting-title"
      >
        自定义主题配置
      </h5>
      <div
        v-show="systermConfig.theme === 'custom'"
        class="setting-custom-group"
      >
        <div class="custom-box">
          <span class="custom-label">顶栏背景色</span>
          <el-color-picker
            v-model="allTheme.custom.headerBgColor"
            show-alpha
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">顶栏前景色</span>
          <el-color-picker
            v-model="allTheme.custom.headerColor"
            show-alpha
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单背景色</span>
          <el-color-picker
            v-model="allTheme.custom.menuBgColor"
            show-alpha
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单文字颜色</span>
          <el-color-picker
            v-model="allTheme.custom.menuTextColor"
            show-alpha
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单展开背景色</span>
          <el-color-picker
            v-model="allTheme.custom.menuOpenBgColor"
            show-alpha
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">内容区背景色</span>
          <el-color-picker
            v-model="allTheme.custom.contentBgColor"
            show-alpha
          />
        </div>
      </div>
      <h5 class="setting-title">
        其他配置
      </h5>
      <div class="setting-other-group">
        <div class="custom-box">
          <span class="custom-label">标签位置</span>
          <el-select
            v-model="systermConfig.tagPosition"
            class="setting-select"
            @change="changeSetting('tagPosition', systermConfig.tagPosition)"
          >
            <el-option
              v-for="tag in tagPositionList"
              :key="tag"
              :label="tag"
              :value="tag"
            />
          </el-select>
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单主题</span>
          <el-select
            v-model="systermConfig.menuTheme"
            class="setting-select"
            @change="changeSetting('menuTheme', systermConfig.menuTheme)"
          >
            <el-option
              v-for="theme in allMenuTheme"
              :key="theme"
              :label="theme"
              :value="theme"
            />
          </el-select>
        </div>
        <div class="custom-box">
          <span class="custom-label">顶栏高度</span>
          <el-input-number
            v-model="systermConfig.layoutConfig.headerHeight"
            @change="changeSetting('headerHeight', systermConfig.layoutConfig.headerHeight)"
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单展开宽度</span>
          <el-input-number
            v-model="systermConfig.layoutConfig.menuWidth"
            @change="changeSetting('menuWidth', systermConfig.layoutConfig.menuWidth)"
          />
        </div>
        <div class="custom-box">
          <span class="custom-label">菜单收起宽度</span>
          <el-input-number
            v-model="systermConfig.layoutConfig.menuCloseWidth"
            @change="changeSetting('menuCloseWidth', systermConfig.layoutConfig.menuCloseWidth)"
          />
        </div>
      </div>
    </div>
  </cy-drawer>
</template>

<script setup>
import { reactive } from 'vue'
import {
  systermConfig,
  layoutList as allLayout,
  themeConfig as allTheme,
  menuThemeList as allMenuTheme,
  tagPositionList,
} from '@/utils/config'
import { getLocal, setLocal } from '@/utils/storage'
import {
  ElColorPicker,
  ElSelect,
  ElOption,
  ElInputNumber,
} from 'element-plus'

const state = reactive({
  show: false
})

const layoutList = allLayout.map(layout => ({ name: layout, class: layout + '-preview' }))
const themeList = Object.keys(allTheme).map(t => ({ ...allTheme[t], name: t }))

const openDrawer = () => { state.show = true }

// 存储修改的设置
const changeSetting = (type, value) => {
  const _setting = getLocal('layout_setting')
  Object.assign(_setting, { [type]: value })
  setLocal('layout_setting', _setting)
}

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
    display: none;
  }

  .active-box {
    box-shadow: 0 0 4px 2px var(--theme-color, #31b0ff) !important;
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
      background-color: #F5F7FF;
      border-radius: 8px;
      box-shadow: 0 0 6px 0px #0000002b;
      cursor: pointer;
      .preview-menu {
        position: absolute;
        background-color: rgb(20, 60, 95);
      }
      .preview-header {
        position: absolute;
        background-color: #fff;
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

  .setting-theme-group {
    display: flex;
    justify-content: space-around;
    padding: 16px 8px;

    .theme-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      box-shadow: 0 0 6px 0px #0000002b;
      background-color: var(--theme-color);
      cursor: pointer;

      .theme--check-icon {
        visibility: hidden;
        fill: var(--select-color);
      }

      &.active-box .theme--check-icon {
        visibility: visible;
      }
    }
  }

  .setting-custom-group, .setting-other-group {
    padding: 16px 8px;
  }

  .custom-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .custom-label {
      font-size: 12px;
    }

    .setting-select {
      width: 120px;
    }
  }

  .custom-box + .custom-box {
    margin-top: 4px;
  }
}
</style>
