import { reactive } from 'vue'
import { getLocal, setLocal } from '../utils/storage'

// 标签类型定义
type tagType = {
  name: string
  title: string
  path: string
  keepAlive: boolean
}

// localstorage名称
const TAG_STORAGE_NAME = 'layout_tag'
const getStorageTag = () => getLocal(TAG_STORAGE_NAME)
const storageTag = JSON.stringify(getStorageTag()) !== '{}' ? getStorageTag() : []

const _tagState = reactive({
  tagList: storageTag || [] as tagType[], // 打开的标签列表
  keepAlives: [] as string[] // 缓存标签列表
})

export const useTagState = () => {
  const state = reactive({}) as any

  // 获取缓存的keepAlive
  state.getKeepAlive = () => _tagState.keepAlives

  // 添加keepAlive缓存
  state.addKeepAlive = (name: string) => _tagState.keepAlives.push(name)

  // 移除keepAlive缓存
  state.removeKeepAlive = (name: string) => {
    const _index = _tagState.keepAlives.findIndex(k => k === name)
    _index > -1 && _tagState.keepAlives.splice(_index, 1)
  }

  // 获取标签列表
  state.getTagList = () => _tagState.tagList

  // 新增一个标签
  state.addTag = (tag: tagType) => {
    _tagState.tagList.push(tag)
    if (tag.keepAlive) state.addKeepAlive(tag.name)
    setLocal(TAG_STORAGE_NAME, _tagState.tagList)
  }

  // 移除标签
  state.removeTag = (tag: tagType) => {
    const _index = _tagState.tagList.findIndex((_tag: tagType) => _tag.path === tag.path && _tag.name === tag.name)
    _tagState.tagList.splice(_index, 1)
    state.removeKeepAlive(tag.name)
    setLocal(TAG_STORAGE_NAME, _tagState.tagList)
  }

  // 移除多个标签
  state.removeTags = (tags: []) => {
    tags.forEach(tag => state.removeTag(tag))
    setLocal(TAG_STORAGE_NAME, _tagState.tagList)
  }

  // 判断标签是否存在
  state.hasTag = (tag: tagType) => {
    return _tagState.tagList.findIndex((_tag: tagType) => _tag.path === tag.path || _tag.name === tag.name) > -1
  }

  // 清空标签
  state.clearTag = () => {
    _tagState.tagList.splice(0, _tagState.tagList.length)
    _tagState.keepAlives.splice(0, _tagState.keepAlives.length)
    setLocal(TAG_STORAGE_NAME, _tagState.tagList)
  }

  return state
}

export default useTagState
