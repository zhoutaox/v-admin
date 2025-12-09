import { IsNotEmpty } from 'class-validator'
import { plainToClassFromExist } from 'class-transformer'
import { BaseDto, BaseEntity } from '@/core'
import { User } from '../model/User'

export function PickType<
  T extends new (...args: unknown[]) => BaseEntity,
  K extends keyof InstanceType<T>,
>(BaseClass: T, keys: readonly K[]) {
  class PickedDto {}
  keys.forEach((key) => {
    Object.defineProperty(PickedDto.prototype, key, {
      get() {
        return this['__' + String(key)]
      },
      set(value) {
        this['__' + String(key)] = value
      },
      enumerable: true,
      configurable: true,
    })
  })
  return PickedDto as new () => Pick<InstanceType<T>, K>
}

export class UserLoginDto extends PickType(User, ['name', 'password']) {}

const user = new UserLoginDto()
user.name = 'admin'
