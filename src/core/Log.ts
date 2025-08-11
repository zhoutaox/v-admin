import { createConsola } from 'consola'
import { AppConfig } from '@/enums'
import { notification } from '@/utils'

export class Log {
  private static logger = createConsola({
    level: 8,
    defaults: {
      tag: AppConfig.PRODUCT_NAME,
    },
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
        title: message.message,
        description: message.stack,
        duration: 3 * 1000,
      })
    }
    this.logger.error(message)
  }

  static box(message: string) {
    this.logger.box(message)
  }

  static success(message: string) {
    this.logger.success(message)
  }

  static start(message: string) {
    this.logger.start(message)
  }
}
