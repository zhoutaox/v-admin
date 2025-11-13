import 'vue-router'
import { Menu } from '@/api'

declare module 'vue-router' {
  type RouterMenu = Omit<Menu, 'clone' | 'validate'>
  interface RouteMeta extends RouterMenu {
    [key: string]: unknown
  }
}
