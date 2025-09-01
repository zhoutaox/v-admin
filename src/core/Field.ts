import type {
  SelectProps,
  InputProps,
  CascaderProps,
  RadioProps,
  ColorPickerProps,
  CheckboxProps,
  DatePickerProps,
  SwitchProps,
} from 'naive-ui'
import { ComponentEnum } from '@/enums'

type CompPropsMap = {
  Input: InputProps
  Select: SelectProps
  Radio: RadioProps
  Cascader: CascaderProps
  ColorPicker: ColorPickerProps
  Checkbox: CheckboxProps
  DatePicker: DatePickerProps
  Switch: SwitchProps
  Upload: object
}

export type AllComProps = CompPropsMap[keyof CompPropsMap]

type CompType =
  | 'Input'
  | 'Select'
  | 'Radio'
  | 'Cascader'
  | 'ColorPicker'
  | 'Checkbox'
  | 'DatePicker'
  | 'Switch'
  | 'Upload'

interface FieldComponentProps<T extends CompType> {
  label: string
  type?: T
  dictId?: string // 字典id
  props?: CompPropsMap[T extends undefined ? 'Input' : T]
  change?: (row: unknown, value: string) => void
}

export function Field<T extends CompType>(props: FieldComponentProps<T>) {
  return function (target: object, propertyKey: string | symbol) {
    if (!target.constructor.prototype.fields) {
      target.constructor.prototype.fields = []
    }

    if (!props.props) {
      props.props = {}
    }

    let placeholderPrefix = '请选择'

    if (props.type === 'Input') {
      placeholderPrefix = '请输入'
    }

    if (!(props?.props as InputProps)?.placeholder) {
      ;(props.props! as InputProps).placeholder = placeholderPrefix + props.label
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
