import { Enum } from '@/core'

export class HttpStatusEnum extends Enum<number> {
  static OK = new HttpStatusEnum(200, '请求成功')
  static UNAUTHORIZED = new HttpStatusEnum(401, '未授权')
  static FORBIDDEN = new HttpStatusEnum(403, '禁止访问')
  static NOT_FOUND = new HttpStatusEnum(404, '资源未找到')
  static INTERNAL_SERVER_ERROR = new HttpStatusEnum(500, '服务器内部错误')
}
