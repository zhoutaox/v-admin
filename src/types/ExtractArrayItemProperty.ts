/**
 * 从数组中提取指定属性的联合类型
 * @example
 * const list = [
 *   { id: 1, name: 'a' },
 *   { id: 2, name: 'b' }
 * ] as const
 *
 * type Names = ExtractArrayItemProperty<typeof list, 'name'> // 'a' | 'b'
 */
export type ExtractArrayItemProperty<
  T extends readonly unknown[],
  K extends keyof T[number],
> = T[number][K]
