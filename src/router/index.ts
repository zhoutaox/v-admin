import { createRouter, type RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import type { Menu } from '@/api/menu/entities/Menu'

export class Router {
  instance = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [],
  })

  layoutModules = import.meta.glob('/src/views/**/*.vue')

  layoutRoute: RouteRecordRaw = {
    name: 'layout', // 添加名称以便后续操作
    component: Layout,
    path: '/',
    redirect: '/home',
    children: [],
  }

  routes: RouteRecordRaw[] = [
    {
      path: '/:path(.*)*',
      name: 'ErrorPage',
      component: Layout,
      children: [
        {
          path: '/:path(.*)*',
          name: 'ErrorPageSon',
          component: () => import('@/views/system/not_found.vue'),
        },
      ],
    },
    this.layoutRoute,
  ]
  constructor() {
    // 初始化默认路由
    this.initDefaultRoutes()

    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  private initDefaultRoutes() {
    // 添加默认路由
    this.layoutRoute.children?.push({
      path: 'home',
      name: 'home',
      component: () => import('@/views/dashboard/home.vue'),
    })
  }

  addRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  addComponentRoute(route: RouteRecordRaw) {
    this.instance.addRoute(route)
  }

  //todo: removeRoute
  removeRoute(route: RouteRecordRaw) {
    this.routes = this.routes.filter((r) => r.path !== route.path)
  }

  // 动态添加路由方法
  addLayoutRoutes(routes: Menu[]) {
    routes.forEach((route) => {
      if (route.componentUrl) {
        if (this.layoutModules[`/src/views${route.componentUrl}.vue`]) {
          const currRoute: RouteRecordRaw = {
            path: route.path,
            name: route.name,
            component: this.layoutModules[`/src/views${route.componentUrl}.vue`],
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
  }
}
export const router = new Router()
