import { Router } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { PageConstants, WHITE_ROUTES } from '@/constants/page-constants'

import appStore from '@/store'

export const createRouterIntercept = (router: Router) => {
  router.beforeEach(async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (!NProgress.isStarted()) {
      NProgress.start()
    }
    // 白名单👇
    if (WHITE_ROUTES.includes(to.path)) {
      next()
      return
    }
    // 权限判断👇
    const userRole = appStore.userStore?.userRole
    const pageRole = to.meta.role
    if (userRole && pageRole) {
      next({ path: PageConstants.BASE_LOGIN, query: { redirect: encodeURIComponent(to.fullPath) } })
      return
    }
    // 重定向判断
    if (to.query.redirect) {
      const redirect = decodeURIComponent(to.query.redirect as string)
      next(redirect)
      return
    }
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

// progress config
NProgress.configure({
  easing: 'ease',
  speed: 300,
  showSpinner: true,
  trickleSpeed: 200,
  minimum: 0.1,
})

export default createRouterIntercept
