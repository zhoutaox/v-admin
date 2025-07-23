type ControllerConfig = {
  controllers?: unknown[]
}

export function Controller(path: string, config: ControllerConfig = {}) {
  return function (target: new (...args: unknown[]) => unknown) {
    target.prototype['basePath'] = path
    Reflect.defineMetadata('path', path, target.prototype)
  }
}
