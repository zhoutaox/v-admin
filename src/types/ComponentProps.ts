import type { InputProps, CascaderProps } from 'naive-ui'

// interface InputProps {
//   x: 'v'
// }
// interface CascaderProps {
//   x: 'x'
//   c: 'v'
// }

export type CompPropsMap = {
  Input: InputProps
  Select: InputProps
  Cascader: CascaderProps
  Checkbox: CascaderProps
  Icon: CascaderProps
}

// 定义组件类型的联合类型
export type CompType = 'Input' | 'Select' | 'Cascader' | 'Checkbox' | 'Icon'

export type Comp = keyof CompPropsMap

export type Com = {
  [K in Comp]: {
    type: K
    props?: CompPropsMap[K]
  }
}[Comp]
