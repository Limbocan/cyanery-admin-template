import { asyncRoutes } from './index'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { userState } from '../state/user-state'
import { menuState } from '../state/menu-state'

// 白名单应该包含基本静态路由
export const WHITE_NAME_LIST: string[] = []
// 添加白名单
export const addWhiteList = (routes: any[]) => {
  routes.forEach((route) => {
    WHITE_NAME_LIST.push(route.path)
    addWhiteList(route.children || [])
  })
}

const useUserState = userState()
const useMenuState = menuState()

// 创建路由守卫
export const createRouterGuards = (router: any) => {
  // 路由拦截
  router.beforeEach(async (to: any, from: any, next: any) => {
    // 白名单路由
    if (WHITE_NAME_LIST.includes(to.path)) {
      next()
      return
    }
    const token = useUserState.getToken()
    if (!token || JSON.stringify(token) === '{}') {
      const redirectData = { name: 'Login', replace: true, query: {} }
      if (to.path) redirectData.query = { ...redirectData.query, redirect: to.path }
      next(redirectData)
      return
    }
    // 已获取异步路由
    if (useMenuState.getIsDone()) {
      next()
      return
    }

    const userRoutes = getPermissionRoute(useUserState.getRole())
    userRoutes.forEach((route: AppRouteRecordRaw) => {
      router.addRoute(route as unknown as RouteRecordRaw)
    })

    // 重定向跳转
    const redirectPath = (from.query.redirect || to.path) as string
    const redirect = decodeURIComponent(redirectPath)
    const nextData =
      to.path === redirect
        ? { path: redirect, replace: true }
        : { path: redirect }
    next(nextData)
  })
  // 路由跳转后
  router.afterEach((to: any) => {
    document.title = (to?.meta?.title as string) || document.title
  })
  // 路由错误
  router.onError((error: any) => error)
}

// 获取路由权限
export const getPermissionRoute = (user: any) => {
  const role = user
  const roleRouts = filterRoute(asyncRoutes, role)
  useMenuState.setAsyncRoute(roleRouts)
  return roleRouts
}

// 筛选路由
const filterRoute = (
  routes: AppRouteRecordRaw[],
  role: any
): AppRouteRecordRaw[] => {
  return routes.filter((node: AppRouteRecordRaw) => {
    const { roles } = node
    if (node.children && node.children.length) {
      const _filteRoute = filterRoute(node.children, role)
      if (_filteRoute.length < 1) return false
      node.children = _filteRoute
    }
    if (!roles || roles.length < 1 || roles?.includes('*')) return true
    if (!roles.includes(role)) return false
    else return true
  })
}
