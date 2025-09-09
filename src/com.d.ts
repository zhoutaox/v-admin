import { Form } from '@/components/form'
import { Icon } from './components/icon'
import { Card } from './components/card'

declare module 'vue' {
  export interface GlobalComponents {
    VForm: typeof Form
    VIcon: typeof Icon
    VCard: typeof Card
  }
}
