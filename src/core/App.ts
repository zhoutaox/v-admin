import { type Plugin, type App as VueApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import { Router, router } from '@/router'
import { AppConfig } from '@/enums'
// iconfont
import '@/icons/iconfont/iconfont.css'
import '@/icons/iconfont/iconfont'
// styles
import '@/styles/index.scss'

export type ApiEncipherMode = 'sm2' | 'rsa' | 'aes' | 'sm4'

type AppOptions = {
  /**
   * # 密钥类型
   */
  apiEncipherMode?: ApiEncipherMode

  /**
   * # 是否启用 API 日志
   */
  enableApiLog?: boolean

  /**
   * # 插件列表
   */
  plugins?: Plugin[]
}

export function App(app: VueApp, options: AppOptions) {
  return function (target: new (...args: unknown[]) => unknown) {
    ;(async () => {
      setupLoading()
      registerPlugins(app, options?.plugins || [])

      AppConfig.ENABLE_API_LOG = options.enableApiLog || false
      AppConfig.ENCRYPT_TYPE = options.apiEncipherMode || 'sm2'

      await setupConfig()
      await setupComponents(app)

      app.mount('#app')
    })()
  }
}

function setupLoading() {
  // 加载动画
  const loadingOverlay = document.createElement('div')
  loadingOverlay.className = 'bs-loading'
  loadingOverlay.id = 'bs-loading'
  loadingOverlay.innerHTML = '<div></div><div></div><div></div><div></div>>'
  document.getElementById('app')?.appendChild(loadingOverlay)
}

/**
 * # 注册插件
 * @param app vue实例
 * @param plugins 插件列表
 */
function registerPlugins(app: VueApp, plugins: Plugin[]) {
  app.use(createPinia()).use(router.instance)
  if (plugins.length) {
    plugins.forEach((plugin) => app.use(plugin))
  }
}

async function setupConfig() {
  // 配置
}

async function setupComponents(app: VueApp) {
  const modules = import.meta.glob('@/components/**/index.ts') as Record<
    string,
    () => Promise<{
      default: Plugin
    }>
  >
  for (const path in modules) {
    const module = await modules[path]()
    const component = module.default
    app.use(component)
  }

  const componentTests = import.meta.glob('@/components/**/__tests__/index.vue')

  for (const path in componentTests) {
    const name = path.split('/')[3]

    router.addComponentRoute({
      path: name,
      component: componentTests[path],
    })
  }
  console.error(router)
  console.error(router.instance.getRoutes())
}
