import { type ApiResponse } from 'bstm-utils'
import { Post } from './Post'
import { Request } from '@/api/helpers/Request'
import type { MakeOptional } from '@/types'
import { BaseEntity } from './BaseEntity'

/**
 * AbstractApi 抽象类
 * @description 用于定义 API 接口的基本方法
 */
export abstract class AbstractApi<T extends BaseEntity = BaseEntity> extends Request {
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
  list(): Promise<ApiResponse> {
    return this.post({})
  }
}
