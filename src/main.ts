import 'reflect-metadata'
import { createApp } from 'vue'
import { App } from './core'
import Root from './App.vue'

@App(createApp(Root), {
  apiEncipherMode: 'sm2',
  enableApiLog: true,
})
class Application {
  static run() {}
}

Application.run()
