import { defineComponent, type PropType, useAttrs } from 'vue'
import { ComponentEnum } from '@/enums'
import { NInput, NRadio, NSelect, NRate } from 'naive-ui'

export default defineComponent({
  name: 'FormItem',
  props: {
    /**
     * # 组件类型
     */
    componentType: {
      type: ComponentEnum as PropType<ComponentEnum>,
      default: ComponentEnum.INPUT,
    },
  },
  setup(props, { slots }) {
    const attrs = useAttrs()

    switch (props.componentType) {
      case ComponentEnum.INPUT:
        return () => <NInput {...attrs} />
      case ComponentEnum.SELECT:
        return () => <NSelect {...attrs} />
      case ComponentEnum.RADIO:
        return () => <NInput {...attrs} />
      case ComponentEnum.RATE:
        return () => <NRate {...attrs} />
      default:
        return () => <NInput {...attrs} />
    }
  },
})
