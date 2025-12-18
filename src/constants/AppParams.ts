const { V_CONTEXT_PATH } = import.meta.env

export class AppParams {
  /**
   * # 通用前缀
   */
  static readonly PREFIX = 'v-'

  /**
   * # 应用名称
   */
  static readonly NAME = this.PREFIX + 'admin'

  /**
   * # 应用版本
   */
  static readonly VERSION = '1.0.0'

  /**
   * # 是否开发环境
   */
  static readonly IS_DEV = import.meta.env.MODE === 'development'

  /**
   * # 首页路径
   */
  static readonly HOME_PATH = '/home'

  /**
   * # 登录路径
   */
  static readonly LOGIN_PATH = '/login'

  /**
   * # 请求加密方式
   */
  static readonly API_ENCRYPT_TYPE = 'sm2'

  /**
   * # 是否开启接口日志
   */
  static readonly API_LOG = 1

  /**
   * # 请求路径
   */
  static readonly CONTEXT_PATH: string = V_CONTEXT_PATH
}
