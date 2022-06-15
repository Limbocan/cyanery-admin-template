import { reactive, computed } from 'vue'

type themeType = {
  [key: string]: string
  mainColor: string
  // 顶部高度↓
  headerHeight: string
  // 顶部背景色↓
  headerBgColor: string
  // 菜单宽度↓
  menuWidth: string
  // 菜单背景色
  menuBgColor: string
  // 菜单文字颜色
  menuTextColor: string
  // 菜单展开背景色
  menuOpenBgColor: string
  // 菜单收起宽度
  menuCloseWidth: string
  // 内容区背景色
  contentBgColor: string
}
// 系统设置
type systermType = {
  layout: string,
  theme: string
}
// 主题配置
export const themeConfig: { [key: string]: themeType } = {
  light: {
    mainColor: '#4B49AC',
    layoutDuration: '.3s',
    headerHeight: '46px',
    headerColor: '#6c7383',
    headerBgColor: '#fff',
    menuWidth: '220px',
    menuBgColor: '#fff',
    menuTextColor: '#8c909a',
    menuOpenBgColor: '#e3e5ee',
    menuCloseWidth: '42px',
    contentBgColor: '#F5F7FF'
  },
  primary: {
    layoutDuration: '.3s',
    mainColor: '#1890ff',
    headerHeight: '46px',
    headerColor: '#000000d9',
    headerBgColor: '#fff',
    menuWidth: '220px',
    menuBgColor: '#1e1e2f',
    menuTextColor: '#8c909a',
    menuOpenBgColor: '#3a3f51',
    menuCloseWidth: '42px',
    contentBgColor: '#F5F7FF'
  }
}
// 可选主题
export const themeList = Object.keys(themeConfig)
// 获取主题样式
export const getThemeStyle = computed(() => {
  const _theme: themeType = themeConfig[systermConfig.theme] || {}
  const style = {} as any
  Object.keys(_theme).forEach(prop => { style[formatStyleProp(prop)] = _theme[prop] })
  return style
})
// 格式化样式变量
const formatStyleProp = (prop: string) => `--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`

// 系统设置
export const systermConfig: systermType = reactive({
  layout: 'layout-left',
  theme: 'light'
})
// 可选布局
export const layoutList = ['layout-top', 'layout-left', 'layout-header-scroll']
