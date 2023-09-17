import { PageConstant } from '@/config/constant'

// base-layout
const baseLayout = () => import('@/layouts/base-layout.vue')
const baseLayoutRoutes = import.meta.glob<{ default: any }>('./base-layout-routes/**/*.ts', { eager: true })

// admin-layout
const adminLayout = () => import('@/layouts/admin-layout.vue')
const adminLayoutRoutes = import.meta.glob<{ default: any }>('./admin-layout-routes/**/*.ts', { eager: true })

// no-layout
const noLayoutRoutes = import.meta.glob<{ default: any }>('./no-layout-routes/**/*.ts', { eager: true })

// layout-route
function getLayoutRoute (routes: Record<string, { default: any }>, component: boolean | (() => Promise<any>), name: string) {
  const routeModuleList: any = []
  Object.keys(routes).forEach((key) => {
    const mod = routes[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
  })

  return component === false ? routeModuleList : {
    path: `/${name}`,
    name,
    component,
    meta: {
      title: name,
    },
    redirect: routeModuleList.length ? routeModuleList[0].path : PageConstant.BASE_HOME,
    children: [...routeModuleList],
  }
}

export const BASE_LAYOUT_ROUTES = getLayoutRoute(baseLayoutRoutes, baseLayout, 'base-layout')
export const ADMIN_LAYOUT_ROUTES = getLayoutRoute(adminLayoutRoutes, adminLayout, 'admin-layout')
export const NO_LAYOUT_ROUTES = getLayoutRoute(noLayoutRoutes, false, 'no-layout')
