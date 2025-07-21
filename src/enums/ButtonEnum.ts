import { Enum } from '@/core'

export class ButtonEnum extends Enum<string> {
  static PRIMARY = new ButtonEnum('primary', '主按钮')
  static SUCCESS = new ButtonEnum('success', '成功按钮')
  static WARNING = new ButtonEnum('warning', '警告按钮')
  static DANGER = new ButtonEnum('danger', '危险按钮')
  static INFO = new ButtonEnum('info', '信息按钮')
  static TEXT = new ButtonEnum('text', '文本按钮')
}
