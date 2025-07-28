interface TableProps {
  name?: string
  crud?: string
  comment?: string
}

export function Table(options: TableProps) {
  return function <T extends { new (...args: unknown[]): unknown }>(target: T) {
    return target
  }
}
