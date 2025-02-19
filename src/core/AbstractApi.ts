import { type ApiResponse } from 'bstm-utils'

/**
 * AbstractApi 抽象类
 * @description 用于定义 API 接口的基本方法
 */
export abstract class AbstractApi {
  abstract add(): Promise<ApiResponse>
  abstract delete(): Promise<ApiResponse>
  abstract modify(): Promise<ApiResponse>
  abstract get(): Promise<ApiResponse>
  abstract list(): Promise<ApiResponse>
}
