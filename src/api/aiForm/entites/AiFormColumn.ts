import { BooleanEnum } from '@/enums'

export class AiFormColumn {
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
