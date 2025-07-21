import type { PropType } from 'vue'
import { ComponentEnum } from '@/enums'
import { type Dict } from '@/types'
import type { SelectProps } from 'naive-ui'

// 定义不同类型的 props

interface ComponentProps<T> {
  disabled?: boolean
  isPassword?: boolean
}

interface FieldComponentProps<T = ComponentEnum> {
  label: string
  type?: T
  options?: Dict[]
  dictId?: string // 字典id
  placeholder?: string
  props?: ComponentProps<T>
  change?: (form: unknown, value: string) => void
}

export interface FieldProps extends FieldComponentProps {
  propertyKey: string
}

export function Field<T extends ComponentEnum>(props: FieldComponentProps<T>) {
  return function (target: object, propertyKey: string | symbol) {
    if (!target.constructor.prototype.fields) {
      target.constructor.prototype.fields = []
    }
    if (!props.placeholder) {
      props.placeholder = '请输入' + props.label
    }
    target.constructor.prototype.fields.push({ ...props, propertyKey })
  }
}
