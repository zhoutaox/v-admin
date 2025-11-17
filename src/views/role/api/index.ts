import { AbstractApi, Controller, Post } from '@/api/helpers'
import { Role } from './model'

@Controller('/api/role')
class RoleApi extends AbstractApi<Role> {
  @Post('/test')
  test() {
    return this.post()
  }
}

export const roleApi = new RoleApi()
export * from './model'
