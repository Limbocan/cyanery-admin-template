import { PageConstant } from '@/config/constant'

// base-layout
const baseLayout = () => import('@/layouts/base-layout.vue')
const baseLayoutRoutes = import.meta.glob<{ default: any }>('./base-layout-routes/**/*.ts', { eager: true })

// admin-layout
const adminLayout = () => import('@/layouts/admin-layout.vue')
const adminLayoutRoutes = import.meta.glob<{ default: any }>('./admin-layout-routes/**/*.ts', { eager: true })

// layout-route
function getLayoutRoute (routes: Record<string, { default: any }>, component: () => Promise<any>, name: string) {
  const routeModuleList: any = []
  Object.keys(routes).forEach((key) => {
    const mod = routes[key].default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    routeModuleList.push(...modList)
  })

  return {
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
