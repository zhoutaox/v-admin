import { AbstractApi, Controller, Post } from '@/core'
import * as Entities from './entities'

@Controller('/menu')
export class MenuApi extends AbstractApi {
  entities: typeof Entities = Entities

  @Post('/vList')
  vList() {
    return this.post()
  }
}

export * from './entities'
