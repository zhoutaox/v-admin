import { SymbolKeys } from '@/enums'

type ControllerConfig = {
  controllers?: unknown[]
}

export function Controller(path: string, config: ControllerConfig = {}) {
  return function (target: new (...args: unknown[]) => unknown) {
    Reflect.defineMetadata(SymbolKeys.CONTROLLER_PATH_KEY, path, target.prototype)
  }
}
