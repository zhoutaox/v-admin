/**
 * ### 枚举 `Key` 的类型
 */
export type EnumKey = string | number | boolean

/**
 * ### 标准枚举字典
 *
 */
export interface IEnum<K extends EnumKey = number> {
  /**
   * ### 字典的值
   */
  key: K

  /**
   * ### 字典的显示标题
   */
  label?: string

  [key: string]: unknown
}
