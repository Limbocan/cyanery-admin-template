// 请求类型
export type TRquestType = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE';

// fetch请求参数
export interface IFetchRequest {
  url: string;
  method?: TRquestType;
  headers?: Record<string, string>;

  // 包含请求的模式（例如，cors、no-cors、same-origin、navigate）。
  mode?: 'no-cors' | 'cors' | 'same-origin';

  // 包含请求的缓存模式（例如，default、reload、no-cache）
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';

  // 包含请求的凭据（例如，omit、same-origin、include）。默认是 same-origin。
  credentials?: 'include' | 'same-origin' | 'omit';

  // 包含如何处理重定向的模式。它可能是 follow、error 或 manual 之一。
  redirect?: 'manual' | 'follow' | 'error';

  // 包含请求的 referrer 策略（例如，no-referrer）。
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' |
  'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

  // 主体内容的 ReadableStream。
  body?: any;
  // 存储 true 或 false，以指示请求是否仍然未被使用。
  bodyUsed?: boolean;
}

// 请求参数
export interface IRuquestProp extends IFetchRequest {
  methods?: TRquestType;
}

// 请求错误
export interface IRequestError { }

// 响应参数
export interface IResponseProp<T> {
  status: number;
  url: string;
  headers: Record<string, string>;
  result: T | null
}
