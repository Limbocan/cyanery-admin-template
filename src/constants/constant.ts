// 路由常量——路径
export enum PageConstant {
  // basic login path
  BASE_LOGIN = '/login',
  // basic home path
  BASE_HOME = '/home',
  // error page path
  NOT_FOUND = '/404',
}

// 路由白名单
export const WHITE_ROUTES: string[] = [
  PageConstant.BASE_LOGIN,
  PageConstant.NOT_FOUND
]
