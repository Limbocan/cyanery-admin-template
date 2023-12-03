import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
// import { presetDaisy } from 'unocss-preset-daisy'
// import themesConfig from './theme'
import presetChinese from 'unocss-preset-chinese'

export default defineConfig({
  presets: [
    presetUno(),
    // presetDaisy({
    //   themes: [themesConfig]
    // }),
    presetAttributify(),
    presetChinese(),
    presetIcons({
      scale: 1.5,
      warn: true
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {}
})
