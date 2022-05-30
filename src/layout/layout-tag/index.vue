<template>
  <div
    v-if="showTags"
    class="layout-tag"
  >
    <ul>
      <li
        v-for="(item, index) in state.tagList"
        :key="index"
        class="tags-li"
        :class="{ active: isActive(item.path) }"
      >
        <router-link
          :to="item.path"
          class="tags-li-title"
        >
          {{ item.title }}
        </router-link>
        <span
          class="tags-li-icon"
          @click="closeTags(index)"
        >
          <i class="el-icon-close" />
        </span>
      </li>
    </ul>
    <!-- <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">
              关闭其他
            </el-dropdown-item>
            <el-dropdown-item command="all">
              关闭所有
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isActive = (path) => {
  return path === route.fullPath
}

const state = reactive({
  tagList: []
})
const showTags = computed(() => state.tagList.length > 0)

// 关闭单个标签
const closeTags = (index) => {
  const delItem = state.tagList[index]
  // store.commit('delTagsItem', { index })
  const item = state.tagList[index]
    ? state.tagList[index]
    : state.tagList[index - 1]
  if (item) {
    delItem.path === route.fullPath && router.push(item.path)
  } else {
    router.push('/')
  }
}

// 设置标签
const setTags = (route) => {
  const isExist = state.tagList.some((item) => {
    return item.path === route.fullPath
  })
  if (!isExist) {
    state.tagList.push({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath,
    })
  }
}
setTags(route)
onBeforeRouteLeave((to) => {
  setTags(to)
})

// // 关闭全部标签
// const closeAll = () => {
//   store.commit('clearTags')
//   router.push('/')
// }
// // 关闭其他标签
// const closeOther = () => {
//   const curItem = tagList.value.filter((item) => {
//     return item.path === route.fullPath
//   })
//   store.commit('closeTagsOther', curItem)
// }
// const handleTags = (command) => {
//   command === 'other' ? closeOther() : closeAll()
// }

// 关闭当前页面的标签页
// store.commit("closeCurrentTag", {
//     $router: router,
//     $route: route
// });
</script>

<style>
.layout-tag {
  position: relative;
  height: 30px;
  min-height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  /* box-shadow: 0 5px 10px #ddd; */
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: #fff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 110px;
  height: 30px;
  background: #fff;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
