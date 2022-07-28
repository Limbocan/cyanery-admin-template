import type { AppRouteRecordRaw } from '../types'
import { LAYOUT } from '../constant'

const route: AppRouteRecordRaw = {
  path: '/components',
  name: 'Components',
  icon: 'fuwuqi',
  order: 4,
  meta: {
    title: '公共组件',
  },
  redirect: { name: 'Button' },
  component: LAYOUT,
  children: [
    {
      path: 'button',
      name: 'Button',
      roles: ['*'],
      meta: {
        title: '按钮',
        keepAlive: true,
      },
      component: () => import('@/views/component/button.vue'),
    },
  ],
}

export default route
