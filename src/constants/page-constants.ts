// 路由常量——路径
export enum PageConstants {
  // basic login path
  BASE_LOGIN = '/login',
  // basic home path
  BASE_HOME = '/home',
  // error page path
  NOT_FOUND = '/404',
  ERROR_PAGE = '/error',
}

// 路由白名单
export const WHITE_ROUTES: string[] = [
  PageConstants.BASE_LOGIN,
  PageConstants.NOT_FOUND
]
