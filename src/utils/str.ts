export function camelToKebabAdvanced(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // 小写字母后跟大写字母
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // 连续大写字母中间插入
    .toLowerCase()
}
