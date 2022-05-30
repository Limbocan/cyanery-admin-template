
import type { App } from 'vue'
import KeepAlives from './keep-alives/index.vue'

export default {
  install(app: App) {
    app.component('KeepAlives', KeepAlives)
  }
}
