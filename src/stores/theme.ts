import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import avatar1 from '@/assets/avatar1.png'
import avatar2 from '@/assets/avatar2.png'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref({
      /**
       * # 是否为深色模式
       */
      isDark: false,

      /**
       * # 是否为折叠状态
       */
      isCollapsed: false,
    })

    const avatar = computed(() => {
      return theme.value.isDark ? avatar2 : avatar1
    })

    function toggleTheme() {
      theme.value.isDark = !theme.value.isDark
    }

    return {
      theme,
      toggleTheme,
      avatar,
    }
  },
  {
    persist: {},
  },
)
