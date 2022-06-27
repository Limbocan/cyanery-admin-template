import { reactive, computed } from 'vue'
import { getLocal } from './storage'

const _localSetting = getLocal('layout_setting')

// 主题配置
type themeType = {
  [key: string]: string | number
  mainColor: string
  // 顶部背景色↓
  headerBgColor: string
  // 顶部前景色
  headerColor: string
  // 菜单背景色
  menuBgColor: string
  // 菜单文字颜色
  menuTextColor: string
  // 菜单展开背景色
  menuOpenBgColor: string
  // 内容区背景色
  contentBgColor: string
}
// 系统设置
type systermType = {
  layout: string, // 布局
  theme: string, // 系统主题
  tagPosition: string, // 标签组件位置
  menuTheme: string, // 菜单组件主题
  layoutConfig: any, // 布局配置
}
// 主题配置
export const themeConfig: { [key: string]: themeType } = reactive({
  light: {
    mainColor: '#4B49AC',
    layoutDuration: '.3s',
    headerColor: '#6c7383',
    headerBgColor: '#fff',
    menuBgColor: '#fff',
    menuTextColor: '#8c909a',
    menuOpenBgColor: '#e3e5ee',
    contentBgColor: '#F5F7FF'
  },
  primary: {
    layoutDuration: '.3s',
    mainColor: '#1890ff',
    headerColor: '#000000d9',
    headerBgColor: '#fff',
    menuBgColor: '#1e1e2f',
    menuTextColor: '#8c909a',
    menuOpenBgColor: '#3a3f51',
    contentBgColor: '#F5F7FF'
  },
  custom: {
    layoutDuration: '.3s',
    mainColor: '#1feef7',
    headerColor: '',
    headerBgColor: '',
    menuBgColor: '',
    menuTextColor: '',
    menuOpenBgColor: '',
    contentBgColor: ''
  }
})
// 获取主题样式
export const getThemeStyle = computed(() => {
  const _theme = { ...themeConfig[systermConfig.theme], ...systermConfig.layoutConfig }
  const style = {} as any
  Object.keys(_theme).forEach(prop => { style[formatStyleProp(prop)] = /width|height/ig.test(prop) ? _theme[prop] + 'px' : _theme[prop] })
  return style
})
// 格式化样式变量
const formatStyleProp = (prop: string) => `--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`

// 系统设置
export const systermConfig: systermType = reactive({
  layout: _localSetting.layout || 'layout-left',
  theme: _localSetting.theme || 'primary',
  layoutConfig: {
    headerHeight: _localSetting.headerHeight || 40,
    menuWidth: _localSetting.menuWidth || 220,
    menuCloseWidth: _localSetting.menuCloseWidth || 42,
  },
  tagPosition: _localSetting.tagPosition || 'header',
  menuTheme: _localSetting.menuTheme || 'dark',
})
// 可选布局
export const layoutList = ['layout-top', 'layout-left', 'layout-header-scroll']
// 可选菜单主题
export const menuThemeList = ['normal', 'primary', 'dark']
// 可选tag位置
export const tagPositionList = ['header', 'content']
