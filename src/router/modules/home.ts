import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  roles: ['*'],
  order: 1,
  icon: 'shouye',
  meta: {
    title: '主页',
  },
  redirect: { name: 'Index' },
  component: LAYOUT,
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      roles: ['*'],
      meta: {
        title: '主页',
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
}

export default route
