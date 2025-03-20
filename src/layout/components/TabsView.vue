<script setup lang="ts">
import { renderIcon } from '@/utils'

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
</script>

<template>
  <div class="tabs-view">
    <div class="left">
      <div class="tabs">
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
        <n-tag class="v-layout-tabs-tag" closable :bordered="false" size="large">
          爱在西元前
        </n-tag>
      </div>
    </div>
    <div class="right">
      <n-dropdown :options="options">
        <v-icon icon="down" size="14" />
      </n-dropdown>
    </div>
  </div>
</template>

<style scoped></style>
