import { ROOT_ROUTE, PAGE_NOT_FOUND_ROUTE, ERROR_ROUTE, LOGIN_ROUTE } from './basic'
import LAYOUTES_ROUTES from './layouts'
import { RouteRecordRaw } from 'vue-router'

// 路由表
export const allRoutes: RouteRecordRaw[] = [
  LOGIN_ROUTE,
  ROOT_ROUTE,
  ...LAYOUTES_ROUTES,
  ERROR_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
]

export default allRoutes
