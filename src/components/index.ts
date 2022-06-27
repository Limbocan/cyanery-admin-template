
import type { App } from 'vue'
import KeepAlives from './keep-alives/index.vue'
import RightClick from './right-click/index.vue'
import Drawer from './drawer/index.vue'

export default {
  install(app: App) {
    app.component('KeepAlives', KeepAlives)
    app.component('RightClick', RightClick)
    app.component('CyDrawer', Drawer)
  }
}
