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
      'base-100': '#FFFFFF',
      'base-200': '#f5f5f5',
      primary: '#3F51B5',
      secondary: '#757de8',
      accent: '#757de8',
      neutral: '#dedeff',
    },
  },
  {
    name: '🌚 dark',
    id: 'dark',
    options: {
      'base-100': '#1E1E1E',
      'base-200': '#2d2d2d',
      primary: '#0085ff',
      secondary: '#0085ff',
      accent: '#e0ffff',
      neutral: '#006fff',
    },
  },
]

// 自定义主题配置
const themesConfig: Record<string, Record<string, string>> = {}
themeList.forEach((theme: ThemeList) => {
  themesConfig[theme.id] = theme.options
})

export default themesConfig
