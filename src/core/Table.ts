import type { Values } from '@/types'

interface TableProps {
  name?: string
  crud?: string
  comment?: string
}

export function Table(options: TableProps) {
  return function <T extends abstract new (...args: Values[]) => Values>(target: T): T {
    // 在这里可以添加装饰器逻辑，比如将表信息存储到类的元数据中
    // ;(target as Values).__tableMetadata = options
    return target
  }
}
