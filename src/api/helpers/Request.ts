import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { secureUtil, type ApiResponse } from 'bstm-utils'
import { RequestHeaderEnum } from '@/enums'
import { AppParams, SymbolKeys } from '@/constants'
import { API_MAP, type PostConfig } from './plugins/Post'
import { Log } from '../../core/Log'

function sm2Adapter() {
  return {
    encrypt: secureUtil.encryptBySM2, // 加密
    decrypt: secureUtil.decryptBySM2, // 解密
  }
}

/**
 * 获取加密适配器
 */
function getSecureAdapter() {
  switch (AppParams.API_ENCRYPT_TYPE) {
    case 'sm2':
      return sm2Adapter()
    default:
      return {
        encrypt: (data: string) => data, // 加密
        decrypt: (data: string) => data, // 解密
      }
  }
}

export class Request {
  private readonly axiosInstance: AxiosInstance
  private readonly baseUrl: string = ''

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: 5 * 60 * 1000, // 5分钟
    })

    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers.set('Is-Server', '1')

        if (config.method !== 'post') {
          throw new Error('请求方法错误')
        }

        const contentType = config.headers['Content-Type']

        if (
          contentType === RequestHeaderEnum.FORM.key ||
          contentType === RequestHeaderEnum.JSON.key
        ) {
          config.data = this.paramFilter(config.data || {}) // 过滤
        }

        // config.env.requestInfo = {
        //   params: config.data,
        //   date: new Date().getTime(),
        // }
        // const adapter = getSecureAdapter()
        // if (contentType === RequestHeaderEnum.FORM.key) {
        //   config.data = { data: adapter.encrypt(JSON.stringify(config.data)) }
        // } else if (contentType === RequestHeaderEnum.JSON.key) {
        //   config.data = adapter.encrypt(JSON.stringify(config.data))
        // }

        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const data = response.data

        if (response.config.responseType === 'blob') {
          // 下载文件
          return response
        } else {
          Log.start(data)
          // if (data) {
          //   try {
          //     response.data = JSON.parse(secureUtil.decryptBySM4(response.data))
          //   } catch (e) {
          //     Log.error(e)
          //   }
          // }

          // if (AppParams.API_LOG) {
          //   console.log(
          //     '\n%c[' + AppParams.NAME + ']',
          //     'color: #fff;background: #f89898;padding: 2px 4px;border-radius: 6px',
          //     response.config.url,
          //     '🍕 ~ ' + '解密结果:',
          //     response.data,
          //     '🌮 ~ ' + '请求参数:', // @ts-expect-error 存放信息
          //     response.config.env!.requestInfo.params,
          //     '🍔 ~ ' + '请求时间:', // @ts-expect-error 存放信息
          //     new Date().getTime() - response.config.env!.requestInfo.date + 'ms' + '\n',
          //   )
          // }

          return response.data
        }
      },
      (error: AxiosError) => {
        Log.error(error)
        return Promise.reject(error)
      },
    )
  }

  private paramFilter(params: Record<string, unknown>) {
    if (!params) return {}
    const result: Record<string, unknown> = {}
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        result[key] = params[key]
      }
    })
    return result
  }

  protected post<T>(
    params: Record<string, unknown> = {},
    config: AxiosRequestConfig = {},
  ): Promise<ApiResponse<T>> {
    const url =
      Reflect.getMetadata(SymbolKeys.CONTROLLER_PATH_KEY, this) +
      Reflect.getMetadata(SymbolKeys.POST_PATH_KEY, this)
    const apiConfig: PostConfig = API_MAP.get(url)

    config = Object.assign(config, {
      headers: {
        'Content-Type': apiConfig?.type || RequestHeaderEnum.FORM.key,
      },
    }) // 合并配置

    return this.axiosInstance.post(AppParams.CONTEXT_PATH + url, params.data, config)
  }
}
