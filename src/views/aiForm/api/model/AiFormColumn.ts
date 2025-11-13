import { BooleanEnum } from '@/enums'
import { BaseEntity, Table } from '@/core'

@Table({
  comment: '智能表单列表字段',
})
export class AiFormColumn extends BaseEntity {
  /**
   * # 列名称
   */
  label: string = ''

  /**
   * # 列宽度
   */
  width: number = 0

  /**
   * # 是否固定列
   */
  fixed: BooleanEnum = BooleanEnum.NO

  /**
   * # 是否支持复制
   */
  copyable: BooleanEnum = BooleanEnum.NO

  /**
   * # 字典ID
   */
  dictClassId: string = ''
}
