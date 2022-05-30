import { reactive } from 'vue'

export const tagState = () => {
  const state = reactive({
    tagList: []
  })

  return state
}
