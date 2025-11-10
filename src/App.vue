<script setup lang="ts">
import { darkTheme, lightTheme, zhCN } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useAppStore } from './stores'
import { onMounted } from 'vue'

const appStore = useAppStore()
onMounted(() => {
  const paintTime = performance.getEntriesByType('paint')
  const firstPaint = paintTime.find((e) => e.name === 'first-paint')
  const firstContentfulPaint = paintTime.find((e) => e.name === 'first-contentful-paint')
  const endTime = performance.now()
  // @ts-expect-error cannot find name __startTime
  const startTime = window.__startTime || 0
  console.log('首页加载总耗时:', ((endTime - startTime) / 1000).toFixed(2), 's')
  if (firstPaint) {
    console.log('首次绘制:', firstPaint.startTime)
  }
  if (firstContentfulPaint) {
    console.log('首次内容绘制:', firstContentfulPaint.startTime)
  }
})
</script>

<template>
  <n-config-provider
    id="app-config-provider"
    class="v-app"
    :locale="zhCN"
    :class="appStore.app.isDark ? 'v-app-dark' : 'v-app-light'"
    :theme="appStore.app.isDark ? darkTheme : lightTheme"
    :theme-overrides="appStore.app.theme"
  >
    <n-global-style />
    <RouterView />
  </n-config-provider>
</template>
