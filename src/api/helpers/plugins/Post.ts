import { objectUtil, type ApiResponse } from 'bstm-utils'
import Schema, { type Rules, type ValidateError } from 'async-validator'
import { RequestHeaderEnum, SymbolKeys, AppConfig } from '@/enums'
import { message } from '@/utils'
import { BaseEntity } from '@/core/BaseEntity'

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

  /**
   * # 响应数据映射
   */
  map?: new () => BaseEntity

  /**
   * # 是否显示加载中...  (仅在浏览器环境有效)
   */
  loading?: boolean

  /**
   * # 加载中提示文本
   */
  loadingText?: string
}

export function Post(path: string, config?: PostConfig): MethodDecorator {
  // @ts-expect-error 暂时无法解决
  return (
    target,
    propertyKey,
    descriptor: TypedPropertyDescriptor<(...args: object[]) => unknown>,
  ) => {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown

    descriptor.value = async function (...args: object[]): Promise<unknown> {
      const url = `${path}`
      API_MAP.set(url, config || {})
      Reflect.defineMetadata(SymbolKeys.POST_PATH_KEY, url, this)

      if (config?.isCache && API_CACHE.has(url)) {
        const result = API_CACHE.get(url)
        console.log(
          '\n%c[' + AppConfig.NAME + ']',
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
      const list = Reflect.getMetadata(
        SymbolKeys.VERIFY_PARAMETER_KEY,
        this.constructor,
        propertyKey,
      ) as Array<{
        parameterIndex: number
        rules: Rules
        type: 'primitive' | 'class'
        typeName: string
      }>

      if (list && list.length) {
        await Promise.all(
          args.map(async (arg: object, index: number) => {
            const meta = list.find((item) => item?.parameterIndex == index)
            if (!meta) return

            if (meta.type === 'primitive') {
              // 原始数据类型，直接验证
              if (!arg || typeof arg !== meta.typeName.toLowerCase()) {
                message.error(
                  `参数验证失败: ${String(propertyKey)}方法中，第${index + 1}个参数类型错误，期望类型为${meta.typeName}`,
                )
                throw new Error(`参数验证失败: ${meta.rules.name} 类型错误`)
              }
            } else {
              try {
                await new Schema(meta.rules).validate(arg)
              } catch (errors) {
                const { errors: validationErrors } = errors as { errors: ValidateError[] }
                if (validationErrors) {
                  validationErrors.forEach((error) => {
                    message.error(error.message as string)
                  })
                }
                throw new Error(`参数验证失败: ${JSON.stringify(validationErrors)}`)
              }
            }
          }),
        )
      }

      // 调用原始方法
      const result = (await originalMethod.apply(this, args)) as ApiResponse

      // todo: 处理返回值映射
      if (result.success) {
      }
      if (config?.isCache) {
        API_CACHE.set(url, result)
      }

      return result
    }
  }
}
