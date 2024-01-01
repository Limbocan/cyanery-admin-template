const home = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('@/pages/home/theme.vue'),
    meta: {
      title: 'Theme'
    }
  },
]

export default home
