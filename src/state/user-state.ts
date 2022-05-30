import { reactive } from 'vue'

const _userState = reactive({
  token: '*',
  userInfo: {},
  role: ''
})

export const userState = () => {
  const state = reactive({}) as any

  state.setRole = (role: string) => {
    _userState.role = role
  }

  state.getRole = () => _userState.role

  state.setToken = (token: string) => {
    _userState.token = token
  }

  state.getToken = () => _userState.token

  state.setUserInfo = (info: any) => {
    _userState.userInfo = { ...info }
  }

  state.getUserInfo = () => _userState.userInfo

  return state
}
