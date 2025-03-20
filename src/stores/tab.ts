import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTabStore = defineStore('tab', () => {
  const tabList = ref<string[]>([])

  const tabListLength = computed(() => tabList.value.length)

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

  /**
   * # 全屏
   */
  function fullscreen() {}

  return {
    tabList,
    tabListLength,
    removeTab,
    removeOtherTab,
    removeAllTab,
    removeLeftTab,
    removeRightTab,
    refreshTab,
    fullscreen,
  }
})
