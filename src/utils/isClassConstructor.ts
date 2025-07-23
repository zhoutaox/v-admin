export function isClassConstructor(value: unknown): boolean {
  if (typeof value !== 'function') return false

  // 检查是否有prototype属性
  if (!value.prototype) return false

  // 检查是否是箭头函数（箭头函数不能作为构造函数）
  const funcString = value.toString()
  if (funcString.includes('=>')) return false

  // 检查是否是ES6类
  if (funcString.startsWith('class ')) return true

  // 检查是否是传统的构造函数
  return value.prototype.constructor === value
}
