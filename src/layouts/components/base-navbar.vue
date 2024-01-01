<template>
  <div class="base-layout-header backdrop-blur duration-100">
    <Logo />
    <div class="base-layout-header-right">
      <ThemeChange />
      <LocalesChange />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo.vue'
import ThemeChange from './theme-change.vue'
import LocalesChange from './locales-change.vue'

</script>

<style scoped>
.base-layout-header {
  position: sticky;
  top: 0;
  height: var(--base-layout-header-height);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 99;
  box-shadow: 0 0 12px 0 var(--bg-200);

  .base-layout-header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
