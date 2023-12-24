import { useLocalStorage } from '@vueuse/core'
import { App, unref } from 'vue'
import { createI18n } from 'vue-i18n'

const zh = import.meta.glob<{ default: any }>('./zh/**/*.json', { eager: true })
const en = import.meta.glob<{ default: any }>('./en/**/*.json', { eager: true })

const getMessageJson = (json: Record<string, any>) => {
  const result: Record<string, string> = {}
  Object.keys(json).forEach(key => Object.assign(result, json[key].default || {}))
  return result
}

const I18nInstance = createI18n({
  legacy: false,
  locale: unref(useLocalStorage('locale', 'zh')),
  messages: {
    zh: getMessageJson(zh),
    en: getMessageJson(en),
  },
})

export const registerLocales = (app: App<Element>) => {
  app.use(I18nInstance)
}

export default registerLocales
