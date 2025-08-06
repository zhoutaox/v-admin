import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { dateUtil } from 'bstm-utils'
import { useFavicon } from '@vueuse/core'
import { AppConfig } from '@/enums'
import avatar1 from '@/assets/avatar1.png'
import avatar2 from '@/assets/avatar2.png'

export const useAppStore = defineStore(
  'app',
  () => {
    const watermark = ref(AppConfig.PRODUCT_NAME + '\n' + dateUtil.format(new Date()))
    const config = {
      /**
       * # 是否为深色模式
       */
      isDark: false,

      /**
       * # 是否为折叠状态
       */
      isCollapsed: false,

      /**
       * # 是否显示水印
       */
      isShowWatermark: false,

      /**
       * # 是否显示面包屑
       */
      isShowBreadcrumb: true,

      /**
       * # 是否显示多标签
       */
      isShowTag: true,

      /**
       * # 是否显示多标签图标
       */
      isShowTagIcon: true,

      /**
       * # 主题
       */
      theme: {
        common: {
          /**
           * # 主要颜色
           */
          primaryColor: '#409EFF',
        },
      },
    }

    const icon = useFavicon()
    const app = ref(config)

    watch(
      () => app.value.isDark,
      (isDark) => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
        icon.value = isDark ? avatar2 : avatar1
      },
      { immediate: true, deep: true },
    )

    const avatar = computed(() => {
      return app.value.isDark ? avatar2 : avatar1
    })

    function toggleTheme() {
      app.value.isDark = !app.value.isDark
    }

    function reset() {
      app.value = config
    }

    return { app, watermark, avatar, toggleTheme, reset }
  },
  {
    persist: {
      pick: ['app'],
    },
  },
)
