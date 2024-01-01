<template>
  <label class="theme-swap">
    <input :checked="themeName === 'dark'" type="checkbox" class="theme-controller" @change="changeThemeFn">
    <svg class="theme-swap-item theme-item-off" viewBox="0 0 24 24">
      <path
        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z">
      </path>
    </svg>
    <svg class="theme-swap-item theme-item-on" viewBox="0 0 24 24">
      <path
        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z">
      </path>
    </svg>
  </label>
</template>

<script setup lang="ts">
import { themeName, changeTheme } from '@/store/theme-store'

defineOptions({
  name: 'ThemeChange',
})

const changeThemeFn = (e: Event) => {
  changeTheme(themeName.value === 'dark' ? 'light' : 'dark')
}

</script>

<style lang="scss" scoped>
.theme-swap {
  position: relative;
  display: inline-grid;
  padding: 0 1rem;
  user-select: none;
  place-content: center;
  cursor: pointer;

  .theme-swap-item {
    width: calc(var(--base-layout-header-height, 3rem) * 0.5);
    height: calc(var(--base-layout-header-height, 3rem) * 0.5);
    grid-column-start: 1;
    grid-row-start: 1;
    fill: currentColor;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(0, 0, .2, 1);
    transition-property: transform, opacity, fill;
  }

  .theme-controller {
    appearance: none;

    &~.theme-item-on {
      opacity: 0;
      transform: rotate(90deg);
    }

    &~.theme-item-off {
      opacity: 1;
      transform: rotate(0);
    }

    &:checked {
      &~.theme-item-on {
        opacity: 1;
        transform: rotate(0);
      }

      &~.theme-item-off {
        opacity: 0;
        transform: rotate(90deg);
      }
    }
  }
}
</style>
