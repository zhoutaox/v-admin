import { createRouter, type RouteRecordRaw, createWebHashHistory, type RouteMeta } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import type { Menu } from '@modules/menu/api/model/Menu'
import { MenuTypeEnum } from '@modules/menu/enums/MenuTypeEnum'
import { createRouterGuards } from './guard'
import { AppParams } from '@/constants'

export class Router {
  instance = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [],
  })

  layoutModules = import.meta.glob('/src/views/**/*.vue')
  componentTestsModules = import.meta.glob('/src/components/**/__tests__/index.vue')

  layoutRoute: RouteRecordRaw = {
    name: 'layout', // 添加名称以便后续操作
    component: Layout,
    path: '/',
    redirect: AppParams.HOME_PATH,
    children: [],
  }

  whiteRoutes: string[] = ['/login']

  routes: RouteRecordRaw[] = [
    {
      path: '/:path(.*)*',
      name: 'ErrorPage',
      children: [
        {
          path: '/:path(.*)*',
          name: 'not_found',
          component: () => import('@/views/system/not_found.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录',
      } as RouteMeta,
      component: () => import('@/views/user/login.vue'),
    },
    this.layoutRoute,
  ]
  constructor() {
    createRouterGuards(this.instance, this.whiteRoutes)

    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  addRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  addComponentRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  removeRoute() {
    this.instance.removeRoute('layout')
  }

  // 动态添加路由方法
  addLayoutRoutes(routes: Menu[]) {
    routes.forEach((route) => {
      if (route.componentUrl) {
        if (
          this.layoutModules[`/src/views${route.componentUrl}.vue`] ||
          route.menuType == MenuTypeEnum.IFRAME
        ) {
          console.error('==>', route)
          const currRoute: RouteRecordRaw = {
            path: route.path,
            name: route.title,
            component:
              route.menuType == MenuTypeEnum.IFRAME
                ? this.layoutModules[`/src/views/iframe/iframe.vue`]
                : this.layoutModules[`/src/views${route.componentUrl}.vue`],
            meta: {
              ...route,
            },
          }
          this.layoutRoute.children?.push(currRoute)
        }
      }

      if (route.children?.length > 0) {
        this.addLayoutRoutes(route.children)
      }
    })

    // 重新注册布局路由
    this.instance.removeRoute('layout')
    this.instance.addRoute(this.layoutRoute)
    // Log.error(this.instance.getRoutes())
  }

  addComponentRoutes(routes: Menu[]) {
    routes.forEach((route) => {
      if (route.componentUrl) {
        if (
          this.componentTestsModules[`/src/components/${route.componentUrl}/__tests__/index.vue`]
        ) {
          const currRoute: RouteRecordRaw = {
            path: route.path,
            name: route.title,
            component:
              this.componentTestsModules[
                `/src/components/${route.componentUrl}/__tests__/index.vue`
              ],
            meta: {
              ...route,
            },
          }
          this.layoutRoute.children?.push(currRoute)
        }
      }

      if (route.children?.length > 0) {
        this.addLayoutRoutes(route.children)
      }
    })
  }
}
export const router = new Router()
