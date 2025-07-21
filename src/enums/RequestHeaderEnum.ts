import { Enum } from '@/core'

export class RequestHeaderEnum extends Enum<string> {
  static JSON = new RequestHeaderEnum('application/json')
  static FORM = new RequestHeaderEnum('application/x-www-form-urlencoded')
  static FILE = new RequestHeaderEnum('multipart/form-data')
}
