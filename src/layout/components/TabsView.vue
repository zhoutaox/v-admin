<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { renderIcon } from '@/utils'
import { useTabStore } from '@/stores'
import { AppConfig } from '@/enums'

const props = defineProps<{
  fullscreen: () => void
}>()

const route = useRoute()
const router = useRouter()
const tabStore = useTabStore()
const options = [
  {
    label: '内容全屏',
    key: 'fullscreen',
    icon: renderIcon('fullscreen'),
  },
  {
    label: '刷新当前',
    key: 'refresh',
    icon: renderIcon('change'),
  },
  {
    label: '关闭当前',
    key: 'close',
    icon: renderIcon('error'),
  },
  {
    label: '关闭其他',
    key: 'closeOther',
    icon: renderIcon('a-sorting2'),
  },
  {
    label: '关闭左侧',
    key: 'closeLeft',
    icon: renderIcon('left-double-arrow'),
  },
  {
    label: '关闭右侧',
    key: 'closeRight',
    icon: renderIcon('right-double-arrow'),
  },
  {
    label: '关闭全部',
    key: 'closeAll',
    icon: renderIcon('stop'),
  },
]

function handleDropdownSelect(key: string | number) {
  switch (key) {
    case 'fullscreen':
      props.fullscreen()
      break
    case 'refresh':
      refreshCurrentTab()
      break
    case 'closeCurrent':
      // Close current tab logic
      break
    case 'closeOther':
      // Close other tabs logic
      break
    case 'closeLeft':
      // Close left tabs logic
      break
    case 'closeRight':
      // Close right tabs logic
      break
    case 'closeAll':
      // Close all tabs logic
      break
  }
}

function refreshCurrentTab() {
  router.replace({ path: route.path, query: { _: Date.now() } })
}

function handleTabClick(name: string) {
  if (name !== route.path) {
    router.push({ path: name })
  }
}
</script>

<template>
  <div class="tabs-view">
    <div class="left">
      <div class="tabs-wrapper">
        <n-tabs type="card" closable class="tabs" justify-content="start" :value="route.path">
          <n-tab
            v-for="panel in tabStore.tabList"
            :key="panel.value"
            :tab="panel.label"
            :name="panel.value"
            :closable="panel.value !== AppConfig.HOME_PATH"
            @click="handleTabClick(panel.value as string)"
            :class="{ 'tab-item': true, 'tab-item-active': panel.value === route.path }"
          >
          </n-tab>
        </n-tabs>
      </div>
    </div>
    <div class="right">
      <n-dropdown :options="options" :on-select="handleDropdownSelect">
        <v-icon icon="down" size="14" />
      </n-dropdown>
    </div>
  </div>
</template>

<style scoped>
.tabs-view {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.left {
  flex: 1;
  overflow: hidden;
  margin-right: 16px;
}

.tabs-wrapper {
  width: 100%;
  overflow: hidden;
}

.tabs {
  /* 确保tab不换行 */
  white-space: nowrap;
}

:deep(.tab-item) {
  background-color: var(--n-color) !important;
}

:deep(.n-tabs-scroll-padding) {
  /* 调整滚动按钮的位置 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.n-tabs-nav-scroll-wrapper) {
  /* 设置滚动区域 */
  overflow: hidden;
}

.right {
  width: 40px;
  flex-shrink: 0;
}
</style>
