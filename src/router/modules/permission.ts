import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/permission',
  name: 'Permission',
  icon: 'fuwuqi',
  order: 2,
  meta: {
    title: '权限',
  },
  redirect: { name: 'Role' },
  component: LAYOUT,
  children: [
    {
      path: 'role',
      name: 'Role',
      roles: ['*'],
      meta: {
        title: '需要权限',
      },
      component: () => import('@/views/permission/role-page.vue'),
    },
    {
      path: 'normal',
      name: 'Normal',
      roles: ['*'],
      meta: {
        title: '不需要权限',
      },
      component: () => import('@/views/permission/normal-page.vue'),
    },
  ],
}

export default route
