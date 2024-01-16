import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'
import viteCompression from 'vite-plugin-compression'

import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE,
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    https: false,
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
        configure: (proxy, option) => { },
      }
    },
  },
  plugins: [
    Vue(
      {
        script: {
          propsDestructure: true,
          defineModel: true,
        },
      },
    ),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://host:port/__inspect/ to see the inspector
    Inspect(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://github.com/unocss/unocss
    // see unocss.config.ts for config
    UnoCss(
      {
        configFile: resolve(__dirname, 'src/styles/unocss.ts'),
      },
    ),

    viteCompression({
      verbose: true, // 默认即可(是否在控制台中输出压缩结果)
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    }),

    VitePWA()
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  css: {},
  build: {
    outDir: './docs',
  }
})
