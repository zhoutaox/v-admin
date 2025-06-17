<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { AppConfig } from '@/enums'
import { RouterView } from 'vue-router'
import { dateUtil } from 'bstm-utils'
import { useAppStore } from '@/stores'
import { useFullscreen } from '@vueuse/core'
import Logo from './components/Logo.vue'
import AsideMenu from './components/AsideMenu.vue'
import PageHeader from './components/PageHeader.vue'
import TabsView from './components/TabsView.vue'

const appStore = useAppStore()
const viewRef = ref<HTMLElement | null>(null)

const { isFullscreen, toggle } = useFullscreen(viewRef)

const timer = setInterval(() => {
  appStore.watermark = AppConfig.PRODUCT_NAME + '\n' + dateUtil.format(new Date())
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <n-layout class="v-layout" has-sider position="static">
    <n-watermark
      v-if="appStore.app.isShowWatermark"
      :content="appStore.watermark"
      selectable
      cross
      fullscreen
      :font-size="14"
      :line-height="16"
      :width="304"
      :height="304"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
      text-align="center"
    >
    </n-watermark>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      @collapse="appStore.app.isCollapsed = true"
      @expand="appStore.app.isCollapsed = false"
      :collapsed="appStore.app.isCollapsed"
    >
      <Logo />
      <AsideMenu />
    </n-layout-sider>
    <n-layout class="v-layout-main">
      <n-scrollbar style="max-height: 100%">
        <n-layout-header position="static">
          <PageHeader />
        </n-layout-header>
        <n-layout-content class="v-layout-content">
          <TabsView :fullscreen="toggle" />
          <div ref="viewRef" class="v-layout-view" :class="isFullscreen && 'v-layout-open-view'">
            <n-scrollbar class="v-layout-view-scrollbar" style="max-height: 84vh">
              <RouterView v-slot="{ Component }">
                <component :is="Component" />
              </RouterView>
            </n-scrollbar>
          </div>
        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
