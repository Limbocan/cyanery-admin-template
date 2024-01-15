<template>
  <keepAlives />
</template>

<script setup lang="ts">
import keepAlives from './components/keep-alives.vue'
import { changeTheme } from '@/store/theme-store'

changeTheme()
</script>
