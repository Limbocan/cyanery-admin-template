<template>
  <div
    :class="[menuState.getCollapse() ? 'open-logo' : 'close-logo']"
    class="header-logo"
  >
    <img
      :src="logoImg"
      alt="logo"
      class="logo-img"
    >
    <h3 class="logo-title">
      Cyanery
    </h3>
  </div>
</template>

<script setup>
import { useMenuState } from '@/state/menu-state'
import logoImg from '@/assets/logo.png'

const menuState = useMenuState()

</script>

<style lang="scss" scoped>

</style>
