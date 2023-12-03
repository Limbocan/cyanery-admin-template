import { PageConstant } from '@/constants/constant'

// 根路由
export const ROOT_ROUTE = {
  path: '/',
  name: 'root',
  redirect: PageConstant.BASE_HOME,
  meta: {
    title: 'root'
  }
}

// login page
export const LOGIN_ROUTE = {
  path: PageConstant.BASE_LOGIN,
  name: 'login',
  component: () => import('@/pages/login-pages/login.vue'),
  meta: {
    title: 'login'
  }
}

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE = {
  path: '/:path(.*)*',
  name: 'not-found',
  component: () => import('@/pages/error-pages/not-found.vue'),
  meta: {
    title: '404'
  }
}
