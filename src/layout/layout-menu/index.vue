<template>
  <div class="layout-menu">
    <CyMenu
      :model-value="active"
      :open="open"
      :data="menuData"
      :unique="true"
      :theme="systermConfig.menuTheme"
      background-color="var(--menu-bg-color)"
      active-color="var(--menu-open-bg-color)"
      text-color="var(--menu-text-color)"
      active-text-corlor="var(--main-color)"
      close-width="var(--menu-close-width)"
      width="var(--menu-width)"
      @menu-click="menuClick"
    >
      <template #header>
        <logo v-show="['layout-left', 'layout-header-scroll'].includes(systermConfig.layout)" />
      </template>
      <template #icon="{ data }">
        <svg class="menu-icon">
          <use :xlink:href="'#cyanery-' + data.icon" />
        </svg>
      </template>
    </CyMenu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuState } from '@/state/menu-state'
import { systermConfig } from '@/utils/config'
import CyMenu from 'cyanery-menu'
import logo from '../layout-header/logo.vue'

const route = useRoute()
const router = useRouter()
const menuState = useMenuState()

// 当前菜单
const active = computed(() => {
  return route.name
})
// 菜单展开状态
const open = computed(() => menuState.getCollapse())

// 菜单数据
const menuData = computed(() => {
  const _routes = menuState.getRoleRoute() || []
  return formatMenu(_routes)
})

// 格式化菜单
const formatMenu = (menus = []) => {
  const result = []
  menus.filter(menu => !menu.hidden).forEach(menu => {
    let _hasChild = menu.children && menu.children.length
    let _menu = {
      ...menu,
      name: menu.meta.title,
      key: menu.name,
      routeName: menu.name,
      children: _hasChild ? [] : null
    }
    if (menu.root === true) {
      _hasChild = false
      _menu = {
        ..._menu,
        ...menu.children[0],
        order: menu.order,
        name: menu.meta.title,
        routeName: menu.children[0].name,
        key: menu.children[0].name,
        children: null
      }
    }
    if (_hasChild) _menu.children.push(...formatMenu(menu.children))
    result.push(_menu)
  })
  result.sort((p, n) => p.order - n.order)
  return result
}

// 菜单点击跳转
const menuClick = (menu) => {
  if (!menu.children || (menu.children && menu.children.length < 1)) router.push({ name: menu.routeName })
}

</script>

<style scoped>
</style>
