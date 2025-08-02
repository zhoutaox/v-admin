import { type Router } from 'vue-router'
import { createDocumentTitleGuard } from './title'
import { createProgressGuard } from './progress'

export function createRouterGuards(router: Router) {
  createProgressGuard(router)
  createDocumentTitleGuard(router)
}
