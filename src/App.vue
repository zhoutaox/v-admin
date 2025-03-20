<script setup lang="ts">
import { useThemeVars, darkTheme, lightTheme, type GlobalThemeOverrides } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores'

const { theme } = useThemeStore()
const themeVars = useThemeVars()

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2d8cf0',
  },
}
</script>

<template>
  <n-config-provider
    class="v-app"
    :class="theme.isDark ? 'v-app-dark' : 'v-app-light'"
    :theme="theme.isDark ? darkTheme : lightTheme"
    :theme-overrides="themeOverrides"
  >
    <RouterView />
  </n-config-provider>
</template>
