import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes/routes'
import routePermission from './permission'
import NProgress from '@/config/nprogress'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  // When switching pages, scroll to the top
  // 当切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// Injection Progress
router.beforeEach(async (to, from, next) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  const result = await routePermission(to, from, next)
  return result
})

router.afterEach(() => {
  NProgress.done()
})
