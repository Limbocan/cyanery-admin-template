import request from '@/utils/request'

export const userListApi = (data = {}) => request({
  url: '/user/list',
  method: 'post',
  data,
})
