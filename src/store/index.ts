import { keepRoutes } from './keep-routes'

const appStore: any = {}

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.keepRoutes = keepRoutes()
}

export default appStore
