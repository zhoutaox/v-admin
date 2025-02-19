import { ComponentEnum } from '@/enums'
import { type Dict } from '@/types'

interface FieldComponentProps {
  label: string
  type?: ComponentEnum
  options?: Dict[]
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  change?: (form: any, value: string) => void
}

export interface FieldProps extends FieldComponentProps {
  propertyKey: string
}

export function Field(props: FieldComponentProps) {
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
