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
  },
  component: () => import('@/views/404/index.vue'),
}

// layout-404路由
export const LAYOUT_PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  hidden: true,
  meta: {
    title: '404',
    roles: ['*'],
  },
  redirect: { name: 'NotFoundChild' },
  component: LAYOUT,
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundChild',
      hidden: true,
      meta: {
        title: '404',
        roles: ['*'],
      },
      component: () => import('@/views/404/index.vue'),
    },
  ],
}

// 主页路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: { name: 'Login' },
  meta: {},
}

// 登录路由
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
}
