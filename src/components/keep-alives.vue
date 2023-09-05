<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="appStore.keepRoutes.values">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import appStore from '@/store'
</script>
