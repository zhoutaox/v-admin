import { AppConfig } from '@/enums'
import { createDiscreteApi } from 'naive-ui'

const { message, notification, dialog, loadingBar, modal } = createDiscreteApi([
  'message',
  'dialog',
  'notification',
  'loadingBar',
  'modal',
])

export { message, notification, dialog, loadingBar, modal }

export function showNoOpenMessage() {
  message.warning(AppConfig.NOT_OPEN_MSG)
}
