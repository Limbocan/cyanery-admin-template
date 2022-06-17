import request from '@/utils/request'

const loginApi = {
  login: (data: any) => request({
    url: '/login',
    method: 'post',
    data
  })
}

export default loginApi
