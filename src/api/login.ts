import request from '@/utils/request'

export const loginApi = (data = {}) => request({
  url: '/login',
  method: 'post',
  data,
})
