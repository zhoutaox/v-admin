import { ComponentEnum } from '@/enums'
import type { SelectProps, InputProps, CascaderProps, RadioProps } from 'naive-ui'

type CompPropsMap = {
  Input: InputProps
  Select: SelectProps
  Radio: RadioProps
  Cascader: CascaderProps
}

export type AllComProps = CompPropsMap[keyof CompPropsMap]

type CompType = 'Input' | 'Select' | 'Radio' | 'Cascader'

interface FieldComponentProps<T extends CompType> {
  label: string
  type?: T
  dictId?: string // 字典id
  props?: CompPropsMap[T extends undefined ? 'Input' : T]
  change?: (form: unknown, value: string) => void
}

export function Field<T extends CompType>(props: FieldComponentProps<T>) {
  return function (target: object, propertyKey: string | symbol) {
    if (!target.constructor.prototype.fields) {
      target.constructor.prototype.fields = []
    }

    const aiFormField = {
      dbName: propertyKey,
      name: props.label,
      widgetType: ComponentEnum.getKeyByTag(props.type || ComponentEnum.INPUT.tag),
      props: props.props || {},
    }

    target.constructor.prototype.fields.push(aiFormField)
  }
}
