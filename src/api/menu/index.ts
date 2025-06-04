import { AbstractApi, Controller, Post } from '@/core'

@Controller('/menu')
export class MenuApi extends AbstractApi {
  @Post('')
  get() {
    return this.post()
  }
}

export * from './entities'
