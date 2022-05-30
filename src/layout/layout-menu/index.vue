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
      active-text-corlor="#248afd"
      close-width="var(--menu-close-width)"
      width="100%"
      theme="primary"
      @menu-click="menuClick"
    >
      <!-- <template #icon="{ data }">
        <svg
          width="16"
          height="16"
          class="menu-icon"
        ><use :xlink:href="data.path" /></svg>
      </template> -->
    </CyMenu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuState } from '@/state/menu-state'
import CyMenu from 'cyanery-menu'

const route = useRoute()
const useMenuState = menuState()

const active = computed(() => {
  return route.path
})
const open = computed(() => useMenuState.getCollapse())

const menuData = computed(() => {
  const _routes = useMenuState.getRoleRoute() || []
  return formatMenu(_routes)
})

const formatMenu = (menus = []) => {
  const result = []
  menus.filter(menu => !menu.hidden).forEach(menu => {
    const _hasChild = menu.children && menu.children.length
    const _menu = { ...menu, name: menu.meta.title, children: _hasChild ? [] : null }
    if (_hasChild) _menu.children.push(...formatMenu(menu.children))
    result.push(_menu)
  })
  return result
}

const menuClick = (menu) => {
  console.log(menu)
}

</script>

<style scoped>
</style>
