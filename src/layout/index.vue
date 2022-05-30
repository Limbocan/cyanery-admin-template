<template>
  <div
    :class="[systermConfig.layout, systermConfig.fixedHead ? 'layout-header-fixed' : '']"
    :style="getThemeStyle"
    class="layout-body"
  >
    <layout-header />
    <layout-menu />
    <div
      :class="useMenuState.getCollapse() ? 'full-content' : 'coll-content'"
      class="layout-content"
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
import { menuState } from '@/state/menu-state'
import KeepAlives from '../components/keep-alives/index.vue'

const useMenuState = menuState()
</script>

<style lang="scss" scoped>
</style>
