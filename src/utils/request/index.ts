import CopoteRequest from './request'

export const axios = new CopoteRequest({})

export default axios.request

/**
 * 示例
 * import request from '@/utils/request'
 *
 * const api = () => {
 *  return request({
 *    url,
 *    method,
 *    data,
 *    serviece // +服务地址
 *    cancelRepeat // 取消重复请求
 *  })
 * }
 */
