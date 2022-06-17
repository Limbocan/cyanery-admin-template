<template>
  <div class="layout-tag">
    <ul class="tag-list">
      <li
        v-for="(item, index) in tagList"
        :key="index"
        class="tag-li"
        :class="{ active: isActive(item.path) }"
      >
        <router-link
          :to="item.path"
          class="tag-li-title"
        >
          {{ item.title }}
        </router-link>
        <svg
          class="tag-li-icon"
          @click="closeTags(item, index)"
        >
          <use xlink:href="#cyanery-CloseDefault" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useTagState from '@/state/tag-state'

const route = useRoute()
const router = useRouter()
const tagState = useTagState()

const isActive = (path) => {
  return path === route.fullPath
}

const tagList = computed(() => tagState.getTagList())

watch(
  () => route.fullPath,
  () => {
    const _tag = { title: route.meta.title, path: route.fullPath, name: route.name, keepAlive: route.meta.keepAlive }
    if (!tagState.hasTag(_tag)) tagState.addTag(_tag)
  },
  { immediate: true }
)

// 关闭单个标签
const closeTags = (tag, index) => {
  const delItem = tagList.value[index]
  const routeItem = tagList.value[index - 1] ?? tagList.value[index + 1]
  tagState.removeTag(tag)
  if (routeItem) {
    delItem.path === route.fullPath && router.push({ path: routeItem.path })
  } else {
    router.push('/')
  }
}
</script>
