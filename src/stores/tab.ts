import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type MenuOption } from 'naive-ui'
import { type Dict } from '@/types'

export const useTabStore = defineStore(
  'tab',
  () => {
    const tabList = ref<Dict[]>([])
    const tabListLength = computed(() => tabList.value.length)

    function addTab(tab: MenuOption) {
      const index = tabList.value.findIndex((item) => item.value === tab.key)
      if (index == -1) {
        tabList.value.push({
          label: tab.label as string,
          value: tab.key as string,
        })
      }
    }

    /**
     * # 删除指定标签页
     * @param tab 标签
     */
    function removeTab(tab: string) {}

    /**
     * # 删除其他标签页
     */
    function removeOtherTab() {}

    /**
     * # 删除所有标签页
     */
    function removeAllTab() {}

    /**
     * # 删除左侧标签页
     */
    function removeLeftTab() {}

    /**
     * # 删除右侧标签页
     */
    function removeRightTab() {}

    /**
     * # 刷新当前标签页
     */
    function refreshTab() {}

    return {
      tabList,
      tabListLength,
      addTab,
      removeTab,
      removeOtherTab,
      removeAllTab,
      removeLeftTab,
      removeRightTab,
      refreshTab,
    }
  },
  {
    persist: {
      pick: ['tabList'],
    },
  },
)
