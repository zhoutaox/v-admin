import { createApp } from 'vue'
import { BaseEntity } from '../core/BaseEntity'
import { DialogForm, DrawerForm } from '../components'

export function openForm(entity: new () => BaseEntity, mode: 'dialog' | 'drawer' = 'dialog') {
  const mountNode = document.createElement('div')

  const instance = createApp(mode === 'dialog' ? DialogForm : DrawerForm, {
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
