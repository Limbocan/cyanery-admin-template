import type { AppRouteRecordRaw } from './types'

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/layout/index.vue')

// 404路由
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: '404',
  hidden: true,
  meta: {
    title: '找不到页面',
    tag: false,
  },
  component: () => import('@/views/404/index.vue'),
}

// 主页路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: { name: 'Login' },
  meta: { tag: false },
}

// 登录路由
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
    tag: false,
  },
}
