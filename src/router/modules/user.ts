import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/users',
  name: 'Users',
  icon: 'yonghu',
  order: 3,
  meta: {
    title: '用户管理',
  },
  redirect: { name: 'Personal' },
  component: LAYOUT,
  children: [
    {
      path: 'personal',
      name: 'Personal',
      roles: ['*'],
      meta: {
        title: '个人信息',
        keepAlive: true,
      },
      component: () => import('@/views/users/personal.vue'),
    },
    {
      path: 'user-list',
      name: 'UserList',
      roles: ['*'],
      meta: {
        title: '用户列表',
        keepAlive: true,
      },
      component: () => import('@/views/users/user-list.vue'),
    },
  ],
}

export default route
