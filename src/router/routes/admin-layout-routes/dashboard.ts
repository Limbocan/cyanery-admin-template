export const dashboard = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: 'dashboard' },
    component: () => import('@/pages/admin/dashboard.vue')
  }
]

export default dashboard
