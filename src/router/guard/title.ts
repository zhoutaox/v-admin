import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { AppConfig } from '@/enums'

export function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    // 设置文档标题
    const title = to.meta.title || AppConfig.PRODUCT_NAME

    useTitle(title)
  })
}
