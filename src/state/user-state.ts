import { reactive } from 'vue'

const _userState = reactive({
  token: '*',
  userInfo: {},
  role: ''
})

export const useUserState = () => {
  const state = reactive({}) as any

  // 设置用户权限
  state.setRole = (role: string) => (_userState.role = role)

  // 获取用户权限
  state.getRole = () => _userState.role

  // 存储token
  state.setToken = (token: string) => (_userState.token = token)

  // 获取token
  state.getToken = () => _userState.token

  // 存储用户信息
  state.setUserInfo = (info: any) => (_userState.userInfo = { ...info })

  // 获取用户信息
  state.getUserInfo = () => _userState.userInfo

  return state
}

export default useUserState
