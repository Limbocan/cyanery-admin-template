import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { PageConstant, WHITE_ROUTES } from '@/constants/constant'

export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (WHITE_ROUTES.includes(to.path)) {
    next()
  }
  if (!document.cookie.includes('auth')) {
    next({ path: PageConstant.BASE_LOGIN, query: { redirect: encodeURIComponent(to.fullPath) } })
    return
  }
  if (to.query.redirect) {
    const redirect = decodeURIComponent(to.query.redirect as string)
    next(redirect)
    return
  }
  next()
}
