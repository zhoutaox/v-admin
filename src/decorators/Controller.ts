type ControllerConfig = {
  controllers?: unknown[]
}

export function Controller(path: string, config: ControllerConfig = {}) {
  return function (target: new (...args: unknown[]) => unknown) {
    Reflect.defineMetadata('path', path, target)
  }
}
