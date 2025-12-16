import { createApp } from 'vue'
import { BaseEntity } from '../core/BaseEntity'
import { DialogForm, DrawerForm } from '../components'

interface IConfig {
  mode: 'dialog' | 'drawer'
  submitFn?: () => Promise<unknown>
}

export function openForm(entity: new () => BaseEntity, config: IConfig = { mode: 'dialog' }) {
  const mountNode = document.createElement('div')

  const instance = createApp(config.mode === 'dialog' ? DialogForm : DrawerForm, {
    dialogForm: true,
    entity,
    close: () => {
      instance.unmount()
      document.body.removeChild(mountNode)
    },
  })

  document.body.appendChild(mountNode)
  instance.mount(mountNode)
}
