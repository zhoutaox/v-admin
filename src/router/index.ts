import { createRouter, createWebHistory, type RouteRecord } from 'vue-router'

export class Router {
  instance = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
  })
  routes: RouteRecord[] = []
  constructor() {
    this.routes.forEach((route) => {
      this.instance.addRoute(route)
    })
  }

  addRoute(route: RouteRecord) {
    this.routes.push(route)
    this.instance.addRoute(route)
  }

  //todo: removeRoute
  removeRoute(route: RouteRecord) {
    this.routes = this.routes.filter((r) => r.path !== route.path)
    // this.instance.removeRoute(route.name)
  }
}

export const router = new Router()
