import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'
import './styles/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(components)

app.mount('#app')
