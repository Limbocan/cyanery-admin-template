import { reactive } from 'vue'

type tagType = {
  name: string
  title: string
  path: string
  keepAlive: boolean
}

const _tagState = reactive({
  tagList: [] as tagType[],
  keepAlives: [] as string[]
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
  }

  // 移除标签
  state.removeTag = (tag: tagType) => {
    const _index = _tagState.tagList.findIndex(_tag => _tag.path === tag.path && _tag.name === tag.name)
    _tagState.tagList.splice(_index, 1)
    state.removeKeepAlive(tag.name)
  }

  // 移除多个标签
  state.removeTags = (tags: []) => {
    tags.forEach(tag => state.removeTag(tag))
  }

  // 判断标签是否存在
  state.hasTag = (tag: tagType) => {
    return _tagState.tagList.findIndex(_tag => _tag.path === tag.path || _tag.name === tag.name) > -1
  }

  // 清空标签
  state.clearTag = () => {
    _tagState.tagList.splice(0, _tagState.tagList.length)
    _tagState.keepAlives.splice(0, _tagState.keepAlives.length)
  }

  return state
}

export default useTagState
