<template>
  <div title="Change Locales" class="dropdown-end dropdown">
    <div tabindex="0" class="btn-ghost btn gap-1 normal-case">
      <span class="hidden md:inline">{{ locale }}</span>
    </div>
    <div class="dropdown-content rounded-t-box rounded-b-box top-px mt-14 w-30 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
      <ul class="menu menu-compact gap-1 p-2" tabindex="0">
        <li v-for="lang in availableLocales" :key="lang">
          <button class="flex" @click="ChangeLocales(lang)">
            <span class="flex flex-1 justify-between">
              {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
              <!--              <span class="badge-ghost badge badge-sm" /> -->
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>

 </style>
