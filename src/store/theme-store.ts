import { useColorMode } from '@vueuse/core'
import type { CustomTheme } from '@/styles/theme'
import { computed } from 'vue'

const mode = useColorMode<CustomTheme>({
  attribute: 'data-theme',
  modes: {},
  disableTransition: false,
})

export const themeName = computed(
  () => mode.value
)

export const changeTheme = (value: CustomTheme) => mode.value = value
