import { createApp } from 'vue'

import { createPinia } from 'pinia'
import registerLocales from './locales/index'
import registerComponents from './components/global-conponents'

import { router } from './router'

import { registerStore } from './store'
import App from '@/App.vue'

import '@/styles/main.scss'
import 'uno.css'

const app = createApp(App)

registerLocales(app)

registerComponents(app)

app.use(createPinia())
registerStore()

app.use(router)

app.mount('#app')
