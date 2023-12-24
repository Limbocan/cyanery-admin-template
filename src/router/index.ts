import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'
import { createRouterIntercept } from './router-intercept'

export const router = createRouter({
  history: import.meta.env.VITE_ROUTER_MODE === 'history' ? createWebHistory() : createWebHashHistory(),
  routes,
  strict: true,
  // 当切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 路由拦截
createRouterIntercept(router)
