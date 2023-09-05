// /**
//  * URL配置
//  */
// export const URL_OPTION: { [key: string]: string } = {
//   BASE: import.meta.env.VITE_BASE_URL,
//   TEST: '/test',
// }
// /**
//  * 服务项配置
//  */
// export const SERVICE_OPTION: { [key: string]: string } = {
//   BASE: import.meta.env.VITE_BASE_API,
//   TEST: '',
// }

// /**
//  * 请求错误消息配置
//  */
// export const STATUS_CODE: Map<string, { title: string; message: string }> =
//   new Map([
//     [
//       '401',
//       {
//         title: '请求错误',
//         message: '认证失败，无法访问系统资源',
//       },
//     ],
//     [
//       '403',
//       {
//         title: '请求错误',
//         message: '当前操作没有权限',
//       },
//     ],
//     [
//       '404',
//       {
//         title: '请求错误',
//         message: '访问资源不存在',
//       },
//     ],
//     [
//       '408',
//       {
//         title: '请求超时',
//         message: '服务器等候请求时发生超时',
//       },
//     ],
//     [
//       '409',
//       {
//         title: '请求冲突',
//         message: '请求重复，已取消',
//       },
//     ],
//   ])
