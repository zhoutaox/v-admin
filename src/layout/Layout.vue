<script setup lang="ts">
import Logo from './components/Logo.vue'
import AsideMenu from './components/AsideMenu.vue'
import PageHeader from './components/PageHeader.vue'
import TabsView from './components/TabsView.vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores'

const { theme } = useThemeStore()
</script>

<template>
  <n-layout class="v-layout" has-sider position="static">
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      @collapse="theme.isCollapsed = true"
      @expand="theme.isCollapsed = false"
      :collapsed="theme.isCollapsed"
    >
      <Logo />
      <AsideMenu />
    </n-layout-sider>
    <n-layout class="v-layout-main">
      <n-layout-header>
        <PageHeader />
      </n-layout-header>
      <n-layout-content class="v-layout-content">
        <TabsView />
        <RouterView></RouterView>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
