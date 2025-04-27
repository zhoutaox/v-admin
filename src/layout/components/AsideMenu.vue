<script setup lang="ts">
import { useThemeStore } from '@/stores'
import { initMenu } from '@/router/initMenu'
import { type MenuOption } from 'naive-ui'
import { Menu } from '@/api/menu/entities/Menu'
import { renderIcon } from '@/utils'
import { useRoute, useRouter } from 'vue-router'

const menus = initMenu()
const { theme } = useThemeStore()
const route = useRoute()
const router = useRouter()

function convertMenuToMenuOptions(menus: Menu[]): MenuOption[] {
  return menus.map((menu) => {
    console.error(menu)

    const menuOption: MenuOption = {
      label: menu.name,
      key: menu.path,
      icon: renderIcon(menu.icon),
    }
    if (menu.children && menu.children.length) {
      menuOption.children = convertMenuToMenuOptions(menu.children)
    }
    return menuOption
  })
}

function clickMenuItem(key: string) {
  router.push(key)
}

const menuOptions = convertMenuToMenuOptions(menus)
</script>

<template>
  <n-menu
    :collapsed="theme.isCollapsed"
    :indent="24"
    :collapsed-width="60"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :value="route.path"
    @update:value="clickMenuItem"
  />
</template>

<style scoped></style>
