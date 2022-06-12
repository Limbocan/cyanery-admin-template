<template>
  <div
    :class="['layout-body', systermConfig.layout]"
    :style="getThemeStyle"
  >
    <layout-header />
    <layout-menu />
    <div
      :class="['layout-content', menuState.getCollapse() ? 'full-content' : 'collapse-content']"
    >
      <layout-tag />
      <div class="content">
        <keep-alives />
      </div>
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from './layout-header/index.vue'
import LayoutMenu from './layout-menu/index.vue'
import LayoutTag from './layout-tag/index.vue'
import { getThemeStyle, systermConfig } from '@/utils/config'
import { useMenuState } from '@/state/menu-state'
import KeepAlives from '../components/keep-alives/index.vue'

const menuState = useMenuState()
</script>

<style lang="scss" scoped>
</style>
