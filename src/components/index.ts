
import type { App } from 'vue'
import KeepAlives from './keep-alives/index.vue'
import RightClick from './right-click/index.vue'
import CyInput from './cy-input/index.vue'
import Drawer from './drawer/index.vue'
import CyForm from './cy-form/base-form.vue'
import CyTable from './cy-table/base-table.vue'

export default {
  install(app: App) {
    app.component('KeepAlives', KeepAlives)
    app.component('RightClick', RightClick)
    app.component('CyInput', CyInput)
    app.component('CyDrawer', Drawer)
    app.component('CyForm', CyForm)
    app.component('CyTable', CyTable)
  }
}
