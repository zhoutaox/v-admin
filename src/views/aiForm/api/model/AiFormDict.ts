/**
 * # 数字字典
 * @author zt
 */
export class AiFormDict {
  /**
   * # 名称
   */
  label: string = ''

  /**
   * # 值
   */
  value: string = ''

  /**
   * # 子级
   */
  children!: AiFormDict[]

  /**
   * # 是否禁用
   */
  disabled!: boolean
}
