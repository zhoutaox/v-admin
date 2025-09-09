import { AbstractApi, Controller, Post } from '@/core'

@Controller('/menu')
export class MenuApi extends AbstractApi {
  @Post('/vList')
  vList() {
    return this.post()
  }
}
