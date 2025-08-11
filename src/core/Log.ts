import { createConsola } from 'consola/browser'
import { AppConfig } from '@/enums'
import { notification } from '@/utils'

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

  static box(message: string) {
    this.logger.box(message)
  }

  static success(message: string) {
    this.logger.withTag('🎖️ ').success(message)
  }

  static start(message: string) {
    this.logger.withTag('🚀 ' + message).start('')
  }
}
