import { name, version } from '../../package.json'
import { type ApiEncipherMode } from '@/core'

const { V_CONTEXT_PATH } = import.meta.env

export class AppConfig {
  static readonly PRODUCT_NAME = name
  static readonly PRODUCT_VERSION = version
  static readonly CONTEXT_PATH: string = V_CONTEXT_PATH
  static ENABLE_API_LOG: boolean = true
  static ENCRYPT_TYPE: ApiEncipherMode = 'sm2'
}
