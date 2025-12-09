import 'vue-router'
import { Menu } from '@/views/menu/api/model/Menu'

declare module 'vue-router' {
  type RouterMenu = Omit<Menu, 'clone' | 'validate'>
  interface RouteMeta extends RouterMenu {
    [key: string]: unknown
  }
}
