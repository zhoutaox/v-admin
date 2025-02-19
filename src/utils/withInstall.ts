import type { App, Plugin, Component } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(component: Component): SFCWithInstall<T> {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name!, component)
  }
  return component as SFCWithInstall<T>
}
