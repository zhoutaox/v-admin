import { ButtonEnum } from '@/enums'
import { BaseEntity, Table } from '@/core'
import type { EnableType } from '@/types'
import type { Type } from 'naive-ui/es/button/src/interface'

@Table({
  name: '',
  comment: '智能表单操作按钮',
})
export class AiFormButton extends BaseEntity {
  /**
   * # 按钮名称
   */
  name: string = ''

  /**
   * # 是否开启
   */
  enable: EnableType = 0

  /**
   * # 方法ID
   */
  methodId: string = ''

  /**
   * # 图标
   */
  icon: string = ''

  /**
   * # 按钮类型
   */
  type: Type = ButtonEnum.PRIMARY.key

  constructor(
    name: string,
    methodId: string,
    type: Type = ButtonEnum.PRIMARY.key,
    icon: string = '',
    enable: EnableType = 0,
  ) {
    super()
    this.name = name
    this.enable = enable
    this.methodId = methodId
    this.type = type
    this.icon = icon
  }
}
