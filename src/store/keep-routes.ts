import { defineStore } from 'pinia'
import { ref } from 'vue'

export const keepRoutes = defineStore('keepRoutes', () => {
  const values = ref <string[]>([])

  function addKeepRoute (name: string) {
    values.value.push(name)
  }

  function removeKeepRoute (name: string) {
    const index = getKeepRouteIndex(name)
    index > -1 && values.value.splice(index, 1)
  }

  function getKeepRouteIndex (name: string) {
    return values.value.findIndex(value => value === name)
  }

  return { values, addKeepRoute, removeKeepRoute }
})
