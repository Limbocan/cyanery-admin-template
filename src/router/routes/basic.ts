import { PageConstants } from '@/constants/page-constants'
import { RouteRecordRaw } from 'vue-router'

// 根路由
export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageConstants.BASE_HOME,
}

// login
export const LOGIN_ROUTE: RouteRecordRaw = {
  path: PageConstants.BASE_LOGIN,
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
}

// login
export const ERROR_ROUTE: RouteRecordRaw = {
  path: PageConstants.ERROR_PAGE,
  name: 'Error',
  component: () => import('@/pages/errorPages/error.vue'),
}

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: '404',
  component: () => import('@/pages/errorPages/404.vue'),
}
