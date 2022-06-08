<template>
  <div class="layout-menu">
    <CyMenu
      :model-value="active"
      :open="open"
      :data="menuData"
      :unique="true"
      background-color="var(--menu-bg-color)"
      active-color="#e7e7e7"
      text-color="#787878"
      active-text-corlor="var(--header-color)"
      close-width="var(--menu-close-width)"
      width="var(--menu-width)"
      theme="dark"
      @menu-click="menuClick"
    >
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
import CyMenu from 'cyanery-menu'

const route = useRoute()
const router = useRouter()
const menuState = useMenuState()

const active = computed(() => {
  return route.name
})
const open = computed(() => menuState.getCollapse())

const menuData = computed(() => {
  const _routes = menuState.getRoleRoute() || []
  return formatMenu(_routes)
})

const formatMenu = (menus = []) => {
  const result = []
  menus.filter(menu => !menu.hidden).forEach(menu => {
    const _hasChild = menu.children && menu.children.length
    const _menu = {
      ...menu,
      name: menu.meta.title,
      key: menu.name,
      routeName: menu.name,
      children: _hasChild ? [] : null
    }
    if (_hasChild) _menu.children.push(...formatMenu(menu.children))
    result.push(_menu)
  })
  result.sort((p, n) => p.order - n.order)
  return result
}

const menuClick = (menu) => {
  if (!menu.children) router.push({ name: menu.routeName })
}

</script>

<style scoped>
</style>
