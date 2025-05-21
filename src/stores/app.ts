import { ref } from 'vue'
import { defineStore } from 'pinia'
import { dateUtil } from 'bstm-utils'
import { AppConfig } from '@/enums'

export const useAppStore = defineStore(
  'app',
  () => {
    const watermark = ref(AppConfig.PRODUCT_NAME + '\n' + dateUtil.format(new Date()))

    const app = ref({
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
    })

    return { app, watermark }
  },
  {
    persist: {
      pick: ['app'],
    },
  },
)
