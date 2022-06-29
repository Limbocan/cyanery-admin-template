<template>
  <div :class="{ 'layout-header': true, 'collapse-header': !collapse }">
    <logo v-show="['layout-top'].includes(systermConfig.layout)" />
    <!-- 折叠按钮 -->
    <div
      class="collapse-btn"
      @click="collapseChage"
    >
      <svg
        v-show="!collapse"
        class="svg-icon"
      >
        <use xlink:href="#cyanery-caidanzhankai" />
      </svg>
      <svg
        v-show="collapse"
        class="svg-icon"
      >
        <use xlink:href="#cyanery-caidanshouqi" />
      </svg>
    </div>

    <div class="header-center">
      <layout-tag v-if="systermConfig.tagPosition === 'header'" />
    </div>

    <div class="header-right">
      <el-popover
        width="220px"
        popper-class="user-popover"
      >
        <template #reference>
          <div
            class="header-item user-item"
            @click="openUser"
          >
            <svg class="header-icon circle-icon">
              <use xlink:href="#cyanery-wode" />
            </svg>
            <span class="username">{{ userState.getUserInfo().username }}</span>
          </div>
        </template>
        <div class="user-box">
          <img
            :src="userImg"
            alt="user"
            class="user-photo"
          >
          <div class="user-buttons">
            <div class="user-button">
              <svg class="button-icon">
                <use xlink:href="#cyanery-dingwei" />
              </svg>
              个人信息
            </div>
            <div
              class="user-button"
              @click="logout"
            >
              <svg class="button-icon">
                <use xlink:href="#cyanery-tuichu" />
              </svg>
              退出登录
            </div>
          </div>
        </div>
      </el-popover>
      <div class="header-item">
        <svg
          class="header-icon circle-icon"
          @click="openSetting"
        >
          <use xlink:href="#cyanery-shezhi1" />
        </svg>
      </div>
    </div>
    <layout-setting ref="layoutSettingRef" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserState } from '@/state/user-state'
import { useMenuState } from '@/state/menu-state'
import { systermConfig } from '@/utils/config'
import { ElPopover } from 'element-plus'
import layoutTag from '../layout-tag/index.vue'
import logo from './logo.vue'
import layoutSetting from '../layout-setting.vue'
import userImg from '@/assets/logo.png'

const layoutSettingRef = ref(null)
const router = useRouter()
const userState = useUserState()
const menuState = useMenuState()
const collapse = computed(() => menuState.getCollapse())

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

// 侧边栏折叠
const collapseChage = () => {
  menuState.setCollapse(!collapse.value)
}

const logout = () => {
  userState.clearUser()
  router.push({ name: 'Login' })
}

// 打开设置
const openSetting = () => {
  layoutSettingRef.value.openDrawer()
}

</script>

<style lang="scss" scoped>
.user-item {
  position: relative;
  display: flex;
  width: auto !important;
  align-items: center;
  cursor: pointer;
  &:hover > .username {
    color: var(--header-bg-color);
  }
  &>.header-icon {
    width: calc(var(--header-height) * 0.7) !important;
  }
  &>.username {
    margin-right: 4px;
    font-size: 12px;
    color: var(--header-color);
    transition: color .2s ease-in-out;
  }
}

.user-box {
  text-align: center;
  .user-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .user-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0;
    .user-button {
      height: 24px;
      line-height: 24px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      border-radius: 12px;
      padding: 6px 8px;
      cursor: pointer;
      transition: color .2s ease-in-out, background .2s ease-in-out;
      &:hover {
        color: #fff;
        background-color: rgb(29, 127, 255);
        .button-icon {
          fill: #fff;
        }
      }
      .button-icon {
        width: 14px;
        height: 14px;
        margin-right: 4px;
        transition: fill .2s ease-in-out;
      }
    }
  }
}
</style>
