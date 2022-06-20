import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import eslintPlugin from 'vite-plugin-eslint'
import ElementPlus from 'unplugin-element-plus/vite'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8848,
    open: true,
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts', 'src/*.js', 'src/*.vue', 'src/*.ts']
    }),
    ElementPlus()
  ]
})
