import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type MenuOption } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { type Dict } from '@/types'

export const useTabStore = defineStore(
  'tab',
  () => {
    const tabList = ref<Dict[]>([])
    const tabListLength = computed(() => tabList.value.length)
    const route = useRoute()
    const router = useRouter()
    const tabValue = ref(route.path)

    function addTab(tab: MenuOption) {
      const index = tabList.value.findIndex((item) => item.value === tab.key)
      if (index == -1) {
        tabList.value.push({
          label: tab.label as string,
          value: tab.key as string,
          icon: route.meta.icon,
        })
      }
    }

    /**
     * # 删除指定标签页
     * @param tab 标签
     */
    function removeTab(tab: string) {
      const index = tabList.value.findIndex((item) => item.value === tab)
      if (index !== -1) {
        tabList.value.splice(index, 1)
      }
    }

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
      tabValue,
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
