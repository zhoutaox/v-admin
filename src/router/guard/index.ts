import { type Router } from 'vue-router'
import { createDocumentTitleGuard } from './title'
import { createProgressGuard } from './progress'

export function createRouterGuards(router: Router) {
  console.log('Initializing router guards...', router)
  createProgressGuard(router)
  createDocumentTitleGuard(router)
}
