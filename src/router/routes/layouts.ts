import { RouteRecordRaw } from 'vue-router'

const baseRoutes = import.meta.glob('./layout-base/**/*', { eager: true })
const adminRoutes = import.meta.glob('./layout-admin/**/*', { eager: true })
const noLayoutRoutes = import.meta.glob('./layout-none/**/*', { eager: true })

const formatRoutes = (routeRecord: Record<string, any>): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  Object.keys(routeRecord).forEach((key) => routes.push(...routeRecord[key]?.default || []))
  return filterRoutes(routes)
}

const filterRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  const resultRoutes: RouteRecordRaw[] = []
  routes.forEach(route => {
    const hasPath = route.path || '' // 路由是否有path
    const routeRole = route.meta?.role as string[] || [] // 当前路由权限表
    const hasChild = route.children?.length // 是否有子路由
    const needRole = routeRole && routeRole.length > 0
    if (needRole || !hasPath) return
    if (!hasChild) resultRoutes.push(route)
    else resultRoutes.push(...filterRoutes(route.children || []))
  })
  return resultRoutes
}

const getRouteRedirect = (routes: RouteRecordRaw[], prefix: string = ''): string => {
  let redirectPath = ''
  const firstRoute = routes[0] || {}
  if (firstRoute.children?.length) redirectPath = getRouteRedirect(firstRoute.children, redirectPath)
  else redirectPath = firstRoute.path[0] === '/' ? firstRoute.path : prefix + firstRoute.path
  return redirectPath
}

const allLayouts: RouteRecordRaw[] = [
  {
    path: '/layout-base',
    name: 'layout-base',
    redirect: '',
    component: () => import('@/layouts/layout-base.vue'),
    children: formatRoutes(baseRoutes),
  },
  {
    path: '/layout-admin',
    name: 'layout-admin',
    redirect: '',
    component: () => import('@/layouts/layout-admin.vue'),
    children: formatRoutes(adminRoutes)
  },
  {
    path: '/layout-none',
    name: 'layout-none',
    redirect: '',
    component: () => import('@/layouts/layout-none.vue'),
    children: formatRoutes(noLayoutRoutes)
  },
].map(route => ({
  ...route,
  redirect: route.children.length ? getRouteRedirect(route.children) : ''
}))

export default allLayouts
