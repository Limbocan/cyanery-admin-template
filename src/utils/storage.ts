
const PREFIX = 'cy_'

const setPrefix = (name: string, add = true) => add ? PREFIX + name : name

// export async function getToken(CookieName: any) {
//   return await cookieStore.get(CookieName)
// }

// export async function setToken(CookieName: any, token: any) {
//   return await cookieStore.set(CookieName, token)
// }

// export async function removeToken(CookieName: any) {
//   return await cookieStore.delete(CookieName)
// }

export function getLocal(localName: any) {
  const str = localStorage.getItem(setPrefix(localName)) || ''
  const atob = window.atob(str)
  const decode = window.decodeURIComponent(atob) || '{}'
  const getVal = JSON.parse(decode)
  return getVal
}

export function setLocal(localName: any, value: any) {
  const strVal = JSON.stringify(value)
  const enCode = window.encodeURIComponent(strVal)
  const str = window.btoa(enCode)
  return localStorage.setItem(setPrefix(localName), str)
}

export function removeLocal(localName: any) {
  return localStorage.removeItem(setPrefix(localName))
}

export function getSession(sessionName: any) {
  const str = sessionStorage.getItem(setPrefix(sessionName)) || ''
  const atob = window.atob(str)
  const decode = decodeURIComponent(atob) || '{}'
  return JSON.parse(decode)
}

export function setSession(sessionName: any, value: any) {
  const str = window.btoa(window.encodeURIComponent(JSON.stringify(value)))
  return sessionStorage.setItem(setPrefix(sessionName), str)
}

export function removeSession(sessionName: any) {
  return sessionStorage.removeItem(setPrefix(sessionName))
}

export default {
  // getToken,
  // setToken,
  // removeToken,
  getLocal,
  setLocal,
  removeLocal,
  getSession,
  setSession,
  removeSession,
}
