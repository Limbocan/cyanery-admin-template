import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/permission',
  name: 'Permission',
  meta: {
    title: '权限',
    roles: ['*'],
  },
  redirect: { name: 'Role' },
  component: LAYOUT,
  children: [
    {
      path: 'role',
      name: 'Role',
      meta: {
        title: '需要权限',
        roles: ['*'],
      },
      component: () => import('@/views/permission/role-page.vue'),
    },
  ],
}

export default route
