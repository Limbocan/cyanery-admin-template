import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteModule } from './types'
import { LoginRoute, RootRoute, PAGE_NOT_FOUND_ROUTE, LAYOUT_PAGE_NOT_FOUND_ROUTE } from './constant'
import { addWhiteList, WHITE_NAME_LIST, createRouterGuards } from './guard'

const modules = import.meta.globEager('./modules/**/*.ts')

// 所有模块异步路由
const routeModuleList: AppRouteModule[] = []
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

// 异步路由
export const asyncRoutes = [...routeModuleList, LAYOUT_PAGE_NOT_FOUND_ROUTE]

// 基础路由
export const basicRoutes = [LoginRoute, RootRoute, PAGE_NOT_FOUND_ROUTE]
addWhiteList(basicRoutes)

// 路由实例
export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
createRouterGuards(router)

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { path } = route
    if (path && !WHITE_NAME_LIST.includes(path as string)) {
      router.hasRoute(path) && router.removeRoute(path)
    }
  })
}

export default router
