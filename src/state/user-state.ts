import { reactive } from 'vue'
import { getLocal, removeLocal, setLocal } from '../utils/storage'
import loginApi from '../api/login'

// localstorage名称
const USER_STORAGE_NAME = 'user_state'
const getStorageUser = () => getLocal(USER_STORAGE_NAME) || {}
const storageUser = getStorageUser()

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
      state.setUserInfo(res.data || {})
      resolve(res.data)
    }).catch((err: any) => reject(err))
  })

  // 设置用户权限
  state.setRole = (role: string) => {
    _userState.role = role
    setLocal(USER_STORAGE_NAME, { ...getStorageUser(), role })
  }

  // 获取用户权限
  state.getRole = () => _userState.role

  // 存储token
  state.setToken = (token: string) => {
    _userState.token = token
    setLocal(USER_STORAGE_NAME, { ...getStorageUser(), token })
  }

  // 获取token
  state.getToken = () => _userState.token

  // 存储用户信息
  state.setUserInfo = (info: any) => {
    _userState.userInfo = { ...info }
    setLocal(USER_STORAGE_NAME, { ...getStorageUser(), userInfo: info })
  }

  // 获取用户信息
  state.getUserInfo = () => _userState.userInfo

  // 退出登录
  state.clearUser = () => {
    _userState.token = ''
    _userState.userInfo = {}
    _userState.role = ''
    removeLocal(USER_STORAGE_NAME)
  }

  return state
}

export default useUserState
