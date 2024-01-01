import { computed, ref } from 'vue'

export const userStore = ref({})

export const userRole = computed(
  () => userStore.value
)
