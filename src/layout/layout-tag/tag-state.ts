import { reactive } from 'vue'

export const useTagState = () => {
  const state = reactive({
    tagList: []
  })

  return state
}
