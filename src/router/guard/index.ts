import { type Router } from 'vue-router'
import { createDocumentTitleGuard } from './title'
import { createProgressGuard } from './progress'
import { createRouteGuards } from './route'

export function createRouterGuards(router: Router, whiteList: string[]) {
  createProgressGuard(router)
  createDocumentTitleGuard(router)
  // createRouteGuards(router, whiteList)
}
