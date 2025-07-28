import { ButtonEnum } from '@/enums'
import { BaseEntity, Table } from '@/core'
import type { EnableType } from '@/types'

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
}
