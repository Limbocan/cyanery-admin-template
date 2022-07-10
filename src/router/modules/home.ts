import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  roles: ['*'],
  order: 1,
  icon: 'shouye',
  root: true,
  meta: {
    title: '主页',
  },
  redirect: { name: 'Dashboard' },
  component: LAYOUT,
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      roles: ['*'],
      meta: {
        title: '主页',
        keepAlive: true,
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
}

export default route
