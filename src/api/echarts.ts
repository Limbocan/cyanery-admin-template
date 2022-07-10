import request from '@/utils/request'

export const getChinaMap = (option = {}) => request({
  url: '/china-map',
  method: 'get',
  ...option
})
