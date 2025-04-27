interface ColumnProps {
  label: string
}

export function Column(props: ColumnProps) {
  return function (target: object, propertyKey: string | symbol) {
    if (!target.constructor.prototype.columns) {
      target.constructor.prototype.columns = []
    }
    target.constructor.prototype.columns.push(propertyKey)
  }
}
