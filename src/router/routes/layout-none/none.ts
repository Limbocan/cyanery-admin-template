const home = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login-pages/login.vue'),
    meta: {
      title: 'Login'
    }
  },
]

export default home
