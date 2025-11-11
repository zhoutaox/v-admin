import { AbstractApi, Controller, Post } from '@/api/helpers'

@Controller('/menu')
export class MenuApi extends AbstractApi {
  @Post('/vList')
  vList() {
    return this.post()
  }
}
