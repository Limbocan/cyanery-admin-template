import { reactive } from 'vue'

type tagType = {
  name: string
  title: string
  path: string
}

const _tagState = reactive({
  tagList: [] as tagType[]
})

export const useTagState = () => {
  const state = reactive({}) as any

  // 获取标签列表
  state.getTagList = () => _tagState.tagList

  // 新增一个标签
  state.addTag = (tag: tagType) => {
    _tagState.tagList.push(tag)
  }

  // 移除标签
  state.removeTag = (tag: tagType) => {
    const _index = _tagState.tagList.findIndex(_tag => _tag.path === tag.path && _tag.name === tag.name)
    _tagState.tagList.splice(_index, 1)
  }

  // 判断标签是否存在
  state.hasTag = (tag: tagType) => {
    return _tagState.tagList.findIndex(_tag => _tag.path === tag.path || _tag.name === tag.name) > -1
  }

  // 清空标签
  state.clearTag = () => {
    _tagState.tagList.splice(0, _tagState.tagList.length)
  }

  return state
}

export default useTagState
