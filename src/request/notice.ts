// // import { ElNotification, ElMessageBox } from 'element-plus'
// import { STATUS_CODE } from './option'
// // 消息参数类型
// declare type Position =
//   | 'top-right'
//   | 'top-left'
//   | 'bottom-right'
//   | 'bottom-left'
// declare type NotificationType = 'success' | 'warning' | 'info' | 'error' | ''

// // 消息参数接口
// interface noticeOption {
//   flag?: number
//   timeId?: number
//   msgInstance?: any
//   type: NotificationType
//   title: string
//   message: string
//   position: Position
//   duration?: number
// }

// /**
//  * 退出登录提示信息
//  * @param msg 提示消息
//  */
// export function logout (msg: string): void {
//   localStorage.clear()
//   sessionStorage.clear()
//   // ElMessageBox.alert(msg, '系统提示', {
//   //   confirmButtonText: '重新登录',
//   //   type: 'warning',
//   //   showClose: false,
//   // }).then(() => {
//   //   location.reload()
//   // })
// }

// /**
//  * 请求错误消息提示参数
//  * @param option
//  * @returns
//  */
// export const notice = function (option: {
//   code: string
//   title?: string
//   msg?: string
// }): void {
//   const codeInfo: { title: string; message: string } | undefined =
//     STATUS_CODE.get(String(option.code))
//   const noticeParams: noticeOption = {
//     type: 'error',
//     title: `${codeInfo ? codeInfo.title : option.title || '错误'}（${option.code || '未知'}）`,
//     message: codeInfo ? codeInfo.message : option.msg || '',
//     position: 'top-right',
//     duration: 2000,
//   }
//   // 调用消息提示方法
//   handlerMsg(noticeParams)
// }

// // 当前正在展示消息列表
// const msgList: noticeOption[] = []

// // 消息处理
// const handlerMsg = (params: noticeOption): void => {
//   if (repeatMsg(params)) return
//   const _MSGID = new Date().getTime()
//   // const msgInstance = ElNotification(params)
//   const _TIMEID = setTimeout(() => {
//     const index = msgList.findIndex((item) => item.flag === _MSGID)
//     msgList.splice(index, 1)
//   }, params.duration)
//   const _MSGDATA = Object.assign(params, {
//     flag: _MSGID,
//     timeId: _TIMEID,
//     // msgInstance,
//   })
//   msgList.push(_MSGDATA)
// }

// // 判断重复消息
// const repeatMsg = (params: noticeOption): boolean => {
//   return msgList.some((item) => {
//     return item.title === params.title && item.message === params.message
//   })
// }
