import { Controller, Post } from '@/decorators'
import { Request } from '../helpers/Request'
import { AbstractApi } from '@/core/AbstractApi'
import type { ApiResponse } from 'bstm-utils'

@Controller('/main/aiform/button')
export class AiFormApi extends Request implements AbstractApi {
  @Post('/v')
  todo() {
    return this.post({})
  }

  add(): Promise<ApiResponse> {
    throw new Error('Method not implemented.')
  }

  delete(): Promise<ApiResponse> {
    throw new Error('Method not implemented.')
  }

  modify(): Promise<ApiResponse> {
    throw new Error('Method not implemented.')
  }

  list(): Promise<ApiResponse> {
    throw new Error('Method not implemented.')
  }

  get(): Promise<ApiResponse> {
    throw new Error('Method not implemented.')
  }
}
