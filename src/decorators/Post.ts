import { objectUtil } from 'bstm-utils'
import { RequestHeaderEnum, SymbolKeys, AppConfig } from '@/enums'

export const API_MAP = new Map()
const API_CACHE = new Map()

// todo: 添加缓存时间 添加鉴权

export type PostConfig = {
  /**
   * # 请求头类型
   */
  type?: RequestHeaderEnum
  /**
   * # 是否缓存
   */
  isCache?: boolean
  /**
   * # 缓存时间
   */
  cacheTime?: number
  /**
   * # 鉴权
   */
  auth?: boolean
}

export function Post(path: string, config?: PostConfig): MethodDecorator {
  // @ts-expect-error 暂时无法解决
  return (
    target,
    propertyKey,
    descriptor: TypedPropertyDescriptor<(...args: unknown[]) => unknown>,
  ) => {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown

    descriptor.value = async function (...args: unknown[]): Promise<unknown> {
      const baseUrl = Reflect.getMetadata('path', target.constructor)
      const url = `${baseUrl}${path}`
      API_MAP.set(url, config || {})
      Reflect.defineMetadata(SymbolKeys.POST_PATH_KEY, url, target.constructor)
      if (config?.isCache && API_CACHE.has(url)) {
        const result = API_CACHE.get(url)
        console.log(
          '\n%c[' + AppConfig.PRODUCT_NAME + ']',
          'color: #fff;background: #f89898;padding: 2px 4px;border-radius: 6px',
          AppConfig.CONTEXT_PATH + url,
          '🍕 ~ ' + '解密结果:',
          result,
          '🌮 ~ ' + '请求参数:',
          args[0],
          '🍔 ~ ' + '请求时间:',
          0 + 'ms' + '\n',
        )
        return objectUtil.cloneDeep(result) // 克隆一下 防止引用类型污染
      }
      // 调用原始方法
      const result = await originalMethod.apply(this, args)
      if (config?.isCache) {
        API_CACHE.set(url, result)
      }

      return result
    }
  }
}
