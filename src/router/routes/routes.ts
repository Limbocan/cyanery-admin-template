import type { RouteRecordRaw } from 'vue-router'
import {
  ROOT_ROUTE,
  LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
} from './basic-routes'
import {
  NO_LAYOUT_ROUTES,
  BASE_LAYOUT_ROUTES,
  ADMIN_LAYOUT_ROUTES,
} from './layout'

// 扩展路由字段
export type customRouteRecordRaw = RouteRecordRaw & {
  remote?: boolean
  hidden?: boolean
}

// 路由表
const ROUTES = [
  ROOT_ROUTE,
  LOGIN_ROUTE,
  BASE_LAYOUT_ROUTES,
  ADMIN_LAYOUT_ROUTES,
  NO_LAYOUT_ROUTES,
  PAGE_NOT_FOUND_ROUTE,
]

// 筛选远程权限/隐藏路由
function filterRoute (routes: customRouteRecordRaw[]): customRouteRecordRaw[] {
  const result: customRouteRecordRaw[] = []
  routes.forEach(route => {
    if (!route.remote && !route.hidden && route.path) {
      const _route: customRouteRecordRaw & { children: customRouteRecordRaw[] } = { ...route, children: [] }
      if (route.children && route.children.length) {
        const child = filterRoute(route.children)
        child.length && _route.children.push(...child)
      }
      result.push(_route)
    }
  })
  return result
}
const filterRoutes = filterRoute(ROUTES)

console.log(filterRoutes)

export default filterRoutes
