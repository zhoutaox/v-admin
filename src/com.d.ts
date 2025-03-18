import { Form } from '@/components/form'
import { Icon } from './components/icon'

declare module 'vue' {
  export interface GlobalComponents {
    VForm: typeof Form
    VIcon: typeof Icon
  }
}
