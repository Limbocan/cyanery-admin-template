import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof String>)
  | (() => Promise<T>)
  | any

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  hidden?: boolean
  disabled?: boolean
  root?: boolean
  order?: number
  props?: any
  icon?: string
  roles?: string[]
  fullPath?: string
}

export type AppRouteModule = AppRouteRecordRaw
