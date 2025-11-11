import type { Type } from 'naive-ui/es/button/src/interface'
import { Enum } from '@/core'

export class ButtonEnum extends Enum<Type> {
  static PRIMARY = new ButtonEnum('primary', '主按钮')
  static SUCCESS = new ButtonEnum('success', '成功按钮')
  static WARNING = new ButtonEnum('warning', '警告按钮')
  static DANGER = new ButtonEnum('error', '危险按钮')
  static INFO = new ButtonEnum('info', '信息按钮')
  static TEXT = new ButtonEnum('tertiary', '文本按钮')
}
