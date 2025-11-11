import 'vue-router'
import { Menu } from '@/api'

declare module 'vue-router' {
  interface RouteMeta extends Menu {
    [key: string]: unknown
  }
}
