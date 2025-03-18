import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * # 菜单标题
     */
    title: string

    /**
     * # 菜单图标
     */
    icon: string
  }
}
