import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDictStore = defineStore(
  'dict',
  () => {
    const dict = ref({
      // 1. 状态
    })
    return { dict }
  },
  {
    persist: true,
  },
)
