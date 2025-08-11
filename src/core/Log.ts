import { createConsola } from 'consola/browser'
import { AppConfig } from '@/enums'
import { notification } from '@/utils'
import type { Values } from '@/types'

export class Log {
  private static logger = createConsola({
    level: 8,
  })

  static info(message: string) {
    this.logger.info(message)
  }

  static warn(message: string) {
    this.logger.warn(message)
  }

  static error(message: unknown) {
    if (message instanceof Error && AppConfig.IS_DEV) {
      notification.error({
        title: '💩 ' + message.message,
        description: message.stack,
        duration: 3 * 1000,
      })
    }
    // todo:这里可以添加更多的错误处理逻辑，比如发送到服务器等
    this.logger.withTag('💩 ').error(message)
  }

  static table(message: Array<Record<string, Values>>) {
    // 打印表头
    if (message.length > 0) {
      const headers = Object.keys(message[0])
      const rows = message.map((row) => headers.map((h) => row[h]))

      // 计算每列最大宽度
      const colWidths = headers.map((header, i) =>
        Math.max(header.length, ...rows.map((row) => String(row[i]).length)),
      )

      // 辅助函数：格式化单元格
      const formatRow = (row: unknown[]) =>
        row
          .map((cell, i) => {
            const str = String(cell)
            return str + ' '.repeat(colWidths[i] - str.length)
          })
          .join(' │ ')

      // 打印分隔线
      const printSeparator = () => {
        console.log(colWidths.map((w) => '─'.repeat(w)).join('─┼─'))
      }

      // 打印表头
      console.log(formatRow(headers))
      printSeparator()
      // 打印每一行
      rows.forEach((row) => {
        console.log(formatRow(row))
      })
    } else {
      console.log('No data to display in table.')
    }
  }

  static success(message: string) {
    this.logger.withTag('🎖️ ').success(message)
  }

  static start(message: string) {
    this.logger.withTag('🚀 ' + message).start('')
  }
}
