import { reactive } from 'vue'
import { getLocal, setLocal } from '../utils/storage'
import loginApi from '../api/login'

const storageUser = getLocal('user_state') || {}

const _userState = reactive({
  token: storageUser.token || '',
  userInfo: storageUser.userInfo || {},
  role: storageUser.role || ''
})

export const useUserState = () => {
  const state = reactive({}) as any

  // 登录
  state.login = (params: any) => new Promise((resolve, reject) => {
    loginApi.login(params).then((res: any) => {
      state.setRole(res.data.role)
      state.setToken(res.data.role)
      state.setUserInfo(res.data)
      resolve(res.data)
    }).catch((err: any) => reject(err))
  })

  // 设置用户权限
  state.setRole = (role: string) => {
    _userState.role = role
    setLocal('user_state', { ...storageUser, role })
  }

  // 获取用户权限
  state.getRole = () => _userState.role

  // 存储token
  state.setToken = (token: string) => {
    _userState.token = token
    setLocal('user_state', { ...storageUser, token })
  }

  // 获取token
  state.getToken = () => _userState.token

  // 存储用户信息
  state.setUserInfo = (info: any) => {
    _userState.userInfo = { ...info }
    setLocal('user_state', { ...storageUser, info })
  }

  // 获取用户信息
  state.getUserInfo = () => _userState.userInfo

  return state
}

export default useUserState
