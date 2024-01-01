<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="keepRoutes">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { keepRoutes } from '@/store/keep-routes'
</script>
