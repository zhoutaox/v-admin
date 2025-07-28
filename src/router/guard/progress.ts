import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { type Router } from 'vue-router'

export function createProgressGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
