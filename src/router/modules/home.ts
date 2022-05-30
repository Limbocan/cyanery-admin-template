import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  meta: {
    title: '主页',
    roles: ['*'],
  },
  redirect: { name: 'Index' },
  component: LAYOUT,
  children: [
    {
      path: '/index',
      name: 'Index',
      meta: {
        title: '主页',
        roles: ['*'],
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
}

export default route
