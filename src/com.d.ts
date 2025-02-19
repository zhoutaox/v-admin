import { Form } from '@/components/form'

declare module 'vue' {
  export interface GlobalComponents {
    VForm: typeof Form
  }
}
