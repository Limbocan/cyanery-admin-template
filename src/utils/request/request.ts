import {
  RequestConfig,
  RequestInstance,
  CancelParams,
  AxiosRequestConfigs,
} from './types'
import axios from 'axios'
import { URL_OPTION, SERVICE_OPTION } from './option'
import { notice, logout } from './notice'

// 取消请求方法
const CancelToken = axios.CancelToken
/**
 *  CyRequest类
 *  @params RequestConfig
 *  实例化参数：AxiosRequestConfigs
 *  service: 服务Api路径
 *  timeout: 超时
 */
class CyRequest implements RequestConfig {
  request: RequestInstance
  baseURL = ''
  service = ''
  penddingList: CancelParams[] = []
  constructor(configs: AxiosRequestConfigs) {
    this.request = this.create(configs)

    /**
     * 请求拦截
     * @params AxiosRequestConfigs
     */
    this.request.interceptors.request.use(
      (config: any) => {
        // 判断token
        if (sessionStorage.getItem('token')) {
          config.headers.token = 'bearer ' + sessionStorage.getItem('token')
        }
        // 判断是否切换URL
        if (config.newURL) {
          const oldURL: string = this.baseURL
          const urlRegExp = new RegExp(oldURL)
          const newURL: string = URL_OPTION[config.newURL]
          config.baseURL = config.baseURL?.replace(urlRegExp, newURL)
        }
        // 判断是否切换服务
        if (config.service) {
          const oldApi: string = this.service
          const apiRegExp = new RegExp(oldApi)
          const newApi: string = SERVICE_OPTION[config.service]
          config.baseURL = config.baseURL?.replace(apiRegExp, newApi)
        } else config.service = this.service
        // 将请求加入暂未响应列表，添加取消请求方法cancel
        config.cancelToken = new CancelToken((c) => {
          this.penddingList.push({
            baseURL: config.baseURL || '',
            url: config.url || '',
            api: config.service || '',
            method: config.method || '',
            cancel: c,
            canceled: false,
          })
        })
        // 判断是否需要取消当前请求的重复请求
        if (config.cancelRepeat) {
          const cancelParams: CancelParams = {
            baseURL: config.baseURL || '',
            url: config.url || '',
            api: config.service || '',
            method: config.method || '',
            canceled: false,
          }
          const requestItem = this.getPenddingItem(cancelParams)
          if (requestItem.length > 1) { this.cancelPenddingItem(requestItem[requestItem.length - 1]) }
        }
        return config
      },
      // 请求错误处理
      (error) => {
        const response = error.toJSON()
        const code = response.code || response.message?.match(/\d+/)?.[0]
        notice({ code, msg: response.message })
        return Promise.reject(error)
      }
    )

    /**
     * 响应拦截
     * @params 响应参数接口：HttpResponse
     */
    this.request.interceptors.response.use(
      (response) => {
        const responseConfig = response.config
        const responseData = response.data
        // 响应成功后移除暂未响应请求
        this.removePenddingItem({
          baseURL: responseConfig.baseURL || '',
          url: responseConfig.url || '',
          api: responseConfig.service || '',
          method: responseConfig.method || '',
          canceled: false,
        })

        if (responseData.code === 'AUTH0003') {
          const msg = '登录状态已过期，请重新登录。'
          logout(msg)
          return Promise.reject(msg)
        } else if (Number(responseData.code) !== 200) {
          notice({ code: responseData.code, msg: responseData.message })
          return Promise.reject(responseData)
        }
        return Promise.resolve(responseData)
      },
      (error) => {
        // 超时请求错误处理
        if (/timeout/.test(error.message)) {
          notice({ code: '408' })
          const errorConfig = error.toJSON().config
          this.removePenddingItem({
            baseURL: errorConfig.baseURL,
            url: errorConfig.url,
            api: errorConfig.service,
            method: errorConfig.method,
            canceled: false,
          })
          return Promise.reject(error.message)
        }
        // 重复请求错误处理
        if (error.message && error.message.code === '409') {
          this.removePenddingItem(error.message.request)
          if (error.message.msg) notice({ code: error.message.code })
          return Promise.reject(error.message)
        }
        // 其他错误处理
        const response = error.toJSON()
        const code = response.code || response.message?.match(/\d+/)?.[0]
        notice({ code, msg: response.message })
        const errorConfig = response.config
        this.removePenddingItem({
          baseURL: errorConfig.baseURL,
          url: errorConfig.url,
          api: errorConfig.service,
          method: errorConfig.method,
          canceled: false,
        })
        return Promise.reject(error)
      }
    )
  }

  /**
   * 实例化aixos并返回实例
   * @param config
   */
  create(config: AxiosRequestConfigs): RequestInstance {
    this.baseURL = URL_OPTION[config.baseURL || 'BASE']
    this.service = SERVICE_OPTION[config.service || 'BASE']
    const Instance = axios.create({
      baseURL: this.baseURL + this.service,
      timeout: config.timeout || 10000,
    }) as RequestInstance
    return Instance
  }
  // ajax(config: AxiosRequestConfigs): AxiosPromise {
  //   return this.request(config)
  // }

  /**
   * 获取暂未响应且满足条件的所有请求
   * @param request
   */
  private getPenddingItem(request: CancelParams): CancelParams[] {
    const item: CancelParams[] = this.penddingList.filter((item) => {
      return (
        item.url === request.url &&
        item.api === request.api &&
        item.method === request.method &&
        item.canceled === request.canceled
      )
    })
    return item
  }

  /**
   * 取消请求
   * @param request
   */
  private cancelPenddingItem(request: CancelParams) {
    if (request.cancel) {
      request.cancel({ request, code: '409', msg: true })
      request.canceled = true
      // this.removePenddingItem(request) // 在响应错误执行移除
    }
  }

  /**
   * 从未响应列表移除已经响应的请求
   * @param request
   */
  private removePenddingItem(request: CancelParams): void {
    const index: number = this.penddingList.findIndex((item) => {
      return (
        item.baseURL === request.baseURL &&
        item.url === request.url &&
        item.api === request.api &&
        item.method === request.method &&
        item.canceled === request.canceled
      )
    })
    if (index > -1) this.penddingList.splice(index, 1)
  }

  /**
   * 取消当前实例下所有未响应请求
   * @param showMsg 是否显示提示信息
   */
  cancelAll(showMsg = false): void {
    this.penddingList.forEach((item) => {
      if (item.cancel) item.cancel({ request: item, code: '409', msg: showMsg })
    })
  }

  /**
   * 取消单个请求
   * @param params CancelParams
   */
  cancelRequest(params: CancelParams): void {
    const requestItem = this.getPenddingItem(params)
    if (requestItem.length > 1) { this.cancelPenddingItem(requestItem[requestItem.length - 1]) }
  }
}

export default CyRequest
