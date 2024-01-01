<template>
  <CyDropdown className="locales-dropdown">
    <svg width="100%" height="100%" class="locales-svg" viewBox="0 0 512 512">
      <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
      <path
        d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z">
      </path>
    </svg>
    <template #content>
      <ul class="locales-list">
        <li v-for="lang in availableLocales" :key="lang" class="locales-item" @click="ChangeLocales(lang)">
          {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
        </li>
      </ul>
    </template>
  </CyDropdown>
</template>

<script setup lang="ts">
import CyDropdown from '@/components/cy-dropdown'
import { languagesNameList } from '@/locales/langugage'
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()
const ChangeLocales = (lang: string) => {
  locale.value = lang
  const localedLang = useLocalStorage('locale', 'zh')
  localedLang.value = lang
}
</script>

<style lang="scss" scoped>
.locales-dropdown {
  padding: 0 1rem 0 0;
  line-height: calc(var(--base-layout-header-height, 3rem) * 0.4);

  .locales-svg {
    fill: currentColor;
    width: calc(var(--base-layout-header-height, 3rem) * 0.4);
    height: calc(var(--base-layout-header-height, 3rem) * 0.4);
  }
}

.locales-list {
  .locales-item {
    min-width: 3rem;
    padding: .2rem 1.2rem;
    border-radius: 1.2rem;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: var(--bg-200);
    }
  }
}
</style>
