<template>
  <div
    :class="[useMenuState.getCollapse() ? 'open-logo' : 'close-logo']"
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
import { menuState } from '@/state/menu-state'
import logoImg from '@/assets/logo.png'

const useMenuState = menuState()

</script>

<style lang="scss" scoped>

</style>
