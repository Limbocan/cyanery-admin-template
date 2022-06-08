import { reactive } from 'vue'

const _menuState = reactive({
  menuOpen: true,
  roleRoutes: [] as any,
  isDoneRoute: false
})

export const useMenuState = () => {
  const state = reactive({}) as any

  // 设置菜单关闭
  state.setCollapse = (value: boolean) => {
    _menuState.menuOpen = value
  }

  // 获取菜单关闭/展开
  state.getCollapse = ():boolean => _menuState.menuOpen

  // 设置权限路由加载状态
  state.setIsDone = (done: boolean) => {
    _menuState.isDoneRoute = done
  }
  // 获取权限路由加载状态
  state.getIsDone = ():boolean => _menuState.isDoneRoute

  // 设置异步路由
  state.setAsyncRoute = (routes: any) => {
    _menuState.roleRoutes = [...routes]
    state.setIsDone(true)
  }
  // 获取异步路由
  state.getRoleRoute = () => _menuState.roleRoutes

  return state
}

export default useMenuState
