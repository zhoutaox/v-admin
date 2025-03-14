import { AbstractApi } from '@/core/AbstractApi'

type ControllerConfig = {
  controllers?: unknown[]
}

export function Controller(path: string, config: ControllerConfig = {}) {
  return function (target: new (...args: unknown[]) => unknown) {
    if (Object.getPrototypeOf(target.prototype)?.constructor.name === 'AbstractApi') {
      console.log('controller', Object.getPrototypeOf(target.prototype))

      Reflect.defineMetadata('path', path, Object.getPrototypeOf(target.prototype).constructor)
    }

    Reflect.defineMetadata('path', path, target)
  }
}
