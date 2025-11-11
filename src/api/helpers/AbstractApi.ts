import { type ApiResponse } from 'bstm-utils'
import { BaseEntity } from '@/core'
import { Post } from './plugins/Post'
import { Request } from './Request'
import type { MakeOptional } from '@/types'

/**
 * AbstractApi 抽象类
 * @description 用于定义 API 接口的基本方法
 */
export class AbstractApi<T extends BaseEntity = BaseEntity> extends Request {
  @Post('/add')
  add(params: MakeOptional<T, 'iid'>): Promise<ApiResponse> {
    return this.post({
      data: params,
    })
  }

  @Post('/delete')
  delete(iid: T['iid']): Promise<ApiResponse> {
    return this.post({
      data: { iid },
    })
  }

  @Post('/modify')
  modify(params: T): Promise<ApiResponse> {
    return this.post({
      data: params,
    })
  }

  @Post('/get')
  get(iid: T['iid']): Promise<ApiResponse<T>> {
    return this.post({
      data: { iid },
    })
  }

  @Post('/list')
  list(): Promise<ApiResponse<T[]>> {
    return this.post({})
  }
}
