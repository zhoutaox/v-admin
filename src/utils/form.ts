import { createApp } from 'vue'
import { BaseEntity } from '../core/BaseEntity'
import { DialogForm } from '../components'
export function openForm(entity: new () => BaseEntity) {
  const mountNode = document.createElement('div')

  const instance = createApp(DialogForm, {
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
