<template>
  <div class="layout-tag">
    <svg
      v-show="scrollHandle"
      :class="['tag-handle', 'tag-handle-left', scrollHandle ? 'show-handle' : '']"
      @click="scrollClick('Left')"
    >
      <use xlink:href="#cyanery-youjiantou" />
    </svg>
    <ul
      ref="tagListRef"
      class="tag-list"
    >
      <right-click
        v-for="(item, index) in tagList"
        :key="index"
      >
        <li :class="['tag-li', { active: isActive(item.path) }]">
          <span
            class="tag-li-title"
            @click="routerClick(item)"
          >{{ item.title }}</span>
          <svg
            v-if="pageConfig.homePath !== item.path"
            class="tag-li-icon"
            @click="closeTags(item, index)"
          >
            <use xlink:href="#cyanery-CloseDefault" />
          </svg>
        </li>
        <template #right>
          <ul class="handler-box">
            <li
              v-for="menu in rightMenuList"
              :key="menu.index"
              :class="['handler-item', (!isActive(item.path) && menu.type === 1) ? 'handler-disabled' : '']"
              @click="rightMenu(menu.type, item, index)"
            >
              {{ menu.label }}
            </li>
          </ul>
        </template>
      </right-click>
    </ul>
    <svg
      v-show="scrollHandle"
      class="tag-handle tag-handle-right"
      @click="scrollClick('Right')"
    >
      <use xlink:href="#cyanery-youjiantou" />
    </svg>
  </div>
</template>

<script setup>
import { computed, watch, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { pageConfig } from '@/utils/config'
import useTagState from '@/state/tag-state'

const route = useRoute()
const router = useRouter()
const tagState = useTagState()
const scrollHandle = ref(false)
const tagListRef = ref(null)

const isActive = (path) => path === route.fullPath

// 标签列表
const tagList = computed(() => tagState.getTagList())

// 监听路由切换当前标签页
watch(
  () => route.fullPath,
  () => {
    const _tag = {
      title: route.meta.title,
      path: route.fullPath,
      name: route.name,
      keepAlive: route.meta.keepAlive
    }
    if (!tagState.hasTag(_tag) && route.meta.tag !== false) tagState.addTag(_tag)
    nextTick(() => scrollActive())
  },
  { immediate: true }
)

// 路由跳转
const routerClick = (tag) => {
  router.push({ path: tag.path })
}

// 右键菜单列表
const rightMenuList = [
  { label: '刷新', type: 1 },
  { label: '关闭当前', type: 2 },
  { label: '关闭其他', type: 3 },
  // { label: '关闭左侧标签', type: 4 },
  // { label: '关闭右侧标签', type: 5 },
  { label: '关闭所有标签', type: 6 }
]

// 右键菜单事件
const rightMenu = (type, menu, index) => {
  switch (type) {
    case 1: {
      if (!isActive(menu.path)) return
      router.replace(route)
      break
    }
    case 2: closeTags(menu, index)
      break
    case 3: {
      const tags = tagList.value.filter(tag => tag.name !== menu.name && tag.path !== menu.path)
      tagState.removeTags(tags)
      break
    }
    case 6: tagState.clearTag()
  }
}

// 关闭单个标签
const closeTags = (tag, index) => {
  const delItem = tagList.value[index]
  const routeItem = tagList.value[index - 1] ?? tagList.value[index + 1]
  tagState.removeTag(tag)
  if (routeItem) {
    delItem.path === route.fullPath && router.push({ path: routeItem.path })
  } else {
    router.push(pageConfig.homePath)
  }
}

// 手动切换滚动
const scrollClick = (type) => {
  const _listWidth = tagListRef.value?.clientWidth
  if (type === 'Left') tagListRef.value.scrollLeft -= _listWidth
  else tagListRef.value.scrollLeft += _listWidth
}

// 滚动到当前标签
const scrollActive = () => {
  if (!tagListRef.value) return
  const _domWidth = tagListRef.value.clientWidth
  const _scrollWidth = tagListRef.value.scrollWidth
  scrollHandle.value = _domWidth !== _scrollWidth
  const _activeTag = tagListRef.value.querySelector('.active')
  nextTick(() => _activeTag.scrollIntoView({ smooth: true }))
}
</script>

<style lang="scss" scoped>
.handler-box {
  padding: 4px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

  .handler-item {
    padding: 7px 16px;
    font-size: 12px;
    white-space: nowrap;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #669cff;
      background: #eee;
    }
    &.handler-disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
