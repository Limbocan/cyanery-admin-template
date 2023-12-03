import { PluginOption } from 'vite'

export default function ThemeCssPlugin(userConfig: Record<string, any>[]): PluginOption {
  const virtualModuleId = 'virtual:theme-css'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  let themeCss = ''
  userConfig.forEach(style => {
    const variables = style.options
    themeCss += `
    [data-theme=${style.id}] {
      ${Object.keys(variables).map(color => `--${color}: ${variables[color]};`).join('')}
    }
    `
  })

  return {
    name: 'theme-css',
    enforce: 'pre',

    transformIndexHtml: {
      enforce: 'pre',
      async transform(html) {
        return {
          html,
          tags: [
            {
              tag: 'style',
              injectTo: 'head-prepend',
              children: themeCss
            },
          ],
        }
      },
    },

    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return 'export const msg = "from virtual module"'
      }
    },
  }
}
