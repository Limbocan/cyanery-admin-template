
import type { App } from 'vue'
import KeepAlives from './keep-alives/index.vue'
import Drawer from './drawer/index.vue'

export default {
  install(app: App) {
    app.component('KeepAlives', KeepAlives)
    app.component('CyDrawer', Drawer)
  }
}
