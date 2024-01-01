import { ref } from 'vue'

export const keepRoutes = ref<string[]>([])

const getKeepRouteIndex = (name: string) => keepRoutes.value.findIndex(value => value === name)

export const addKeepRoute = (name: string) => keepRoutes.value.push(name)

export const removeKeepRoute = (name: string) => {
  const index = getKeepRouteIndex(name)
  index > -1 && keepRoutes.value.splice(index, 1)
}

export default keepRoutes
