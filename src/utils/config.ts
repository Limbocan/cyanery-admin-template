import { reactive, computed } from 'vue'

type themeType = {
  [key: string]: string
  // 顶部高度↓
  headerHeight: string
  // 顶部背景色↓
  headerBgColor: string
  // 菜单宽度↓
  menuWidth: string
  // 菜单背景色
  menuBgColor: string
  // 菜单收起宽度
  menuCloseWidth: string
  // 内容区背景色
  contentBgColor: string
}

type systermType = {
  theme: string
}

export const themeConfig: { [key: string]: themeType } = {
  primary: {
    headerHeight: '52px',
    headerColor: '#4B49AC',
    headerBgColor: '#fff',
    menuWidth: '220px',
    menuBgColor: '#fff',
    menuCloseWidth: '42px',
    contentBgColor: '#F5F7FF'
  }
}

export const getThemeStyle = computed(() => {
  const _theme: themeType = themeConfig[systermConfig.theme] || {}
  const style = {} as any
  Object.keys(_theme).forEach(prop => { style[getStyleFormat(prop)] = _theme[prop] })
  return style
})

const getStyleFormat = (prop: string) => `--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`

export const systermConfig: systermType = reactive({
  layout: 'layout-top',
  fixedHead: true,
  theme: 'primary'
})
