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
  message.warning('该功能暂未开放，敬请期待！')
}
