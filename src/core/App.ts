import { type Plugin, type App as VueApp, type Directive } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { useAppStore, useRouterStore } from '@/stores'
import 'normalize.css'
import { router } from '@/router'
import { AppConfig } from '@/enums'
// iconfont
import '@/icons/iconfont/iconfont.css'
import '@/icons/iconfont/iconfont'
// styles
import 'animate.css'
import '@/styles/index.scss'
import icon from '@/assets/avatar1.png'

import { Menu } from '@/api/menu'

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
      setupRouter(app)

      AppConfig.ENABLE_API_LOG = options.enableApiLog || false
      AppConfig.ENCRYPT_TYPE = options.apiEncipherMode || 'sm2'

      setupDirectives(app)
      await setupConfig()
      await setupComponents(app)
      setupTheme()

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
  /**
   * pinia 持久化插件
   */
  const persist = createPersistedState({
    // 存储key的前缀
    key: (id: string) => `${AppConfig.PRODUCT_NAME}_${id}`.toLocaleUpperCase(),

    // 自动恢复状态
    auto: true,

    // 存储方式，默认是 localStorage
    storage: window.localStorage,

    /**
     * 序列化数据
     * @param data 需要序列化的数据
     */
    serializer: {
      deserialize: JSON.parse,
      serialize: JSON.stringify,
    },
  })

  app.use(createPinia().use(persist))
  if (plugins.length) {
    plugins.forEach((plugin) => app.use(plugin))
  }
}

/**
 * # 设置路由
 * @param app vue实例
 */
function setupRouter(app: VueApp) {
  const { addRoute } = useRouterStore()
  addRoute()

  app.use(router.instance)
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
  const componentMenu = new Menu()
  componentMenu.title = '组件'

  for (const path in componentTests) {
    const name = path.split('/')[3]
    const menu = new Menu()
    menu.title = name
    menu.path = '/components/' + name
    menu.componentUrl = path.replace('/__tests__/index.vue', '')
    menu.icon = 'component'
    componentMenu.children.push(menu)

    // router.addComponentRoute({
    //   path: '/components/' + name,
    //   name: name,
    //   component: componentTests[path],
    // })
  }
  router.addLayoutRoutes([componentMenu])
  router.addComponentRoutes([componentMenu])
}

function setupDirectives(app: VueApp) {
  const modules = import.meta.glob('@/directives/*.ts', { eager: true })
  for (const path in modules) {
    const directive = modules[path] as {
      default: Directive
    }
    if (directive.default) {
      app.directive(path.split('/').pop()?.replace('.ts', '') || '', directive.default)
    }
  }
}

function setupTheme() {
  const app = useAppStore()
  console.error(app.app.theme)
  document.documentElement.style.setProperty(
    '--v-color-primary',
    app.app.theme.common.primaryColor || '#409EFF',
  )
}
