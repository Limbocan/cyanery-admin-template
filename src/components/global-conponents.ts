import { App } from 'vue'
import CyButton from './cy-button/cy-button.vue'

export const registerComponents = (app: App<Element>) => {
  app.component(CyButton.name, CyButton)
}

export default registerComponents
