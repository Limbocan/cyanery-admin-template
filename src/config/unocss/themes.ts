import type { BasicColorSchema } from '@vueuse/core'

// 主题类型
export declare type CustomTheme = 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave'
  | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'forest' | 'aqua' |
  'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' |
  'autumn' | 'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | 'winter' | BasicColorSchema;

// 主题类型列表
export interface ThemeList {
  name: string;
  id: CustomTheme;
  options: Record<string, string>
}

// 主题列表
export const themeList: ThemeList[] = [
  {
    name: '🌝 light',
    id: 'light',
    options: {
      primary: '#3b1fba',
      secondary: '#7f3ca8',
      accent: '#51db4e',
      neutral: '#1b1f23',
      'base-100': '#e8e8e9',
      info: '#acdaec',
      success: '#60e6d7',
      warning: '#f8cf68',
      error: '#e63760',
    },
  },
  {
    name: '🌚 dark',
    id: 'dark',
    options: {
      primary: '#8d46ea',
      secondary: '#af8be5',
      accent: '#eda8c3',
      neutral: '#2f2c35',
      'base-100': '#2b3c4a',
      info: '#445cc5',
      success: '#0d7232',
      warning: '#955d0f',
      error: '#ee1717',
    },
  },
]

// 自定义主题配置
const themesConfig: Record<string, Record<string, string>> = {}
themeList.forEach((theme: ThemeList) => {
  themesConfig[theme.id] = theme.options
})

export default themesConfig
