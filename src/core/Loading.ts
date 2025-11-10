import { useLoading } from '@/hooks'

export function Loading() {
  return function (_: object, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: unknown[]) {
      console.log(args)

      const { openLoading, closeLoading } = useLoading()
      openLoading() // 显示加载提示
      // 确保原方法返回的是一个Promise
      return Promise.resolve(originalMethod.apply(this, args)).finally(() => closeLoading()) // 无论成功失败，最后都隐藏加载提示
    }
  }
}
