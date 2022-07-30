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
      <div class="header-item">
        <svg
          class="header-icon"
          @click="changeScreen"
        >
          <use :xlink:href="isFullScreen ? '#cyanery-tuichuquanping' : '#cyanery-quanping'" />
        </svg>
      </div>
      <div
        class="header-item user-item"
        @mouseenter="openUser"
        @mouseleave="openUser"
      >
        <svg class="header-icon circle-icon">
          <use xlink:href="#cyanery-wode" />
        </svg>
        <span class="username">{{ userState.getUserInfo().username }}</span>
        <cy-collapse>
          <div
            v-show="userShow"
            class="user-box"
          >
            <div class="user-buttons">
              <div
                class="user-button"
                @click="goRouter('Personal')"
              >
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
        </cy-collapse>
      </div>
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
import { Collapse as cyCollapse } from 'cyanery-menu'
import { useUserState } from '@/state/user-state'
import { useMenuState } from '@/state/menu-state'
import { systermConfig } from '@/utils/config'
// import { ElMessageBox } from 'element-plus'
import layoutTag from '../layout-tag/index.vue'
import logo from './logo.vue'
import layoutSetting from '../layout-setting.vue'

const layoutSettingRef = ref(null)
const userShow = ref(false)
const router = useRouter()
const userState = useUserState()
const menuState = useMenuState()
const collapse = computed(() => menuState.getCollapse())
const isFullScreen = ref(false)

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

// 侧边栏折叠
const collapseChage = () => {
  menuState.setCollapse(!collapse.value)
}

// 退出登录
const logout = () => {
  userState.clearUser()
  menuState.clearState()
  router.push({ name: 'Login' })
  // ElMessageBox.confirm('', '确认退出系统？', {
  //   confirmButtonText: '确认',
  //   cancelButtonText: '取消',
  //   type: 'warning',
  //   draggable: true,
  // }).then(() => {
  //   userState.clearUser()
  //   menuState.clearState()
  //   router.push({ name: 'Login' })
  // }).catch(e => e)
}

// 路由跳转
const goRouter = (name) => {
  router.push({ name })
}

// 全屏/退出全屏
const changeScreen = () => {
  if (isFullScreen.value) document.exitFullscreen()
  else document.querySelector('body').requestFullscreen()
}
// 监听全屏变化
document.addEventListener('fullscreenchange', (e) => {
  if (document.fullscreenElement) isFullScreen.value = true
  else isFullScreen.value = false
})

// 打开设置
const openSetting = () => {
  layoutSettingRef.value.openDrawer()
}

const openUser = () => (userShow.value = !userShow.value)

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
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  .user-buttons {
    padding: 4px 0;
    background-color: #fff;
    .user-button {
      height: 32px;
      line-height: 32px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      padding: 10px 8px 10px 6px;
      font-size: 12px;
      color: #000000d9;
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
        margin-top: 2px;
        margin-right: 2px;
        transition: fill .2s ease-in-out;
      }
    }

    .user-button + .user-button {
      border-top: 1px solid #cccccc4f;
    }
  }
}
</style>
