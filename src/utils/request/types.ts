import {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
  AxiosInterceptorManager,
  AxiosResponse,
} from 'axios'

/**
 * 接口配置↓
 */
// 实例化CyRequest类接口
export interface RequestConfig {
  request: RequestInstance // axios实例
  baseURL?: string // 当前baseURL
  service?: string // 当前服务API地址
  create: (config: AxiosRequestConfigs) => RequestInstance // 实例化axios方法
  // ajax: (config: AxiosRequestConfigs) => AxiosPromise
  cancelAll: (showMsg: boolean) => void // 取消当前所有请求的实例方法
  cancelRequest: (params: CancelParams) => void // 取消单个请求的实例方法
}

// 继承axios参数接口添加自定义参数
export interface AxiosRequestConfigs extends AxiosRequestConfig {
  newURL?: string // 切换baseURL
  service?: string // 需要切换的服务
  cancelRepeat?: boolean // 是否取消重复请求
  [propName: string]: unknown
}

// 继承axios响应添加自定义参数-接口
export interface HttpResponse extends AxiosResponse {
  config: AxiosRequestConfigs // 将请求回调config重写为自定义参数AxiosRequestConfigs
}

// 重写request实例-配置自定义参数
export interface RequestInstance extends AxiosInstance {
  (config?: AxiosRequestConfigs): AxiosPromise
  (url: string, config?: AxiosRequestConfigs): AxiosPromise
  // ajax: (config: AxiosRequestConfigs) => AxiosPromise
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfigs>
    response: AxiosInterceptorManager<HttpResponse>
  }
}

// 取消请求参数接口
export interface CancelParams {
  baseURL: string
  url: string
  api: string
  method: string
  cancel?: (T: any) => void
  canceled?: boolean
}
