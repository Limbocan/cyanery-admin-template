import { IFetchRequest, IRuquestProp, IResponseProp } from './types'

class CyaneryFetch {
  #BaseUrl: string

  constructor(baseUrl = import.meta.env.VITE_BASE_URL) {
    this.#BaseUrl = baseUrl
  }

  // 请求拦截
  #requestIntercept(props: IRuquestProp): IFetchRequest {
    return {
      ...props,
      url: this.#BaseUrl + props.url,
      method: props.method || props.methods || 'get',
    }
  }

  // 响应拦截
  #responseIntercept<T>(response: IResponseProp<T>) {
    return response
  }

  // 处理响应数据格式
  #responseFormat(response: Response) {
    const resContentType = response.headers.get('Content-Type')
    const matchType = resContentType ? resContentType.match(/\S+\/\S+;/) : ''
    const matchCondition = matchType ? matchType[0] : ''

    switch (matchCondition) {
      case 'application/json;': return response.json()
      case 'text/html;': return response.text()
      default: return response.text()
    }
  }

  get<T>(props: IRuquestProp): Promise<IResponseProp<T>> {
    return this.request({ ...props, method: 'get', methods: 'get' })
  }

  post<T>(props: IRuquestProp): Promise<IResponseProp<T>> {
    return this.request({ ...props, method: 'post', methods: 'post' })
  }

  request<T>(props: IRuquestProp): Promise<IResponseProp<T>> {
    return new Promise((resolve, reject) => {
      const params = this.#requestIntercept(props)
      let responseInfo: IResponseProp<T>

      fetch(props.url, params).then(response => {
        const headers: any = response.headers
        const allHeaders: Record<string, string> = {}
        for (const header of headers.entries()) allHeaders[header[0]] = header[1]
        responseInfo = {
          status: response.status,
          url: response.url,
          headers: allHeaders,
          result: null,
        }
        const interceptResult = this.#responseIntercept<T>(responseInfo)
        console.log(interceptResult)
        return this.#responseFormat(response)
      }).then(response => {
        resolve({ ...responseInfo, result: response })
      }).catch(e => reject(e))
    })
  }
}

export default CyaneryFetch
