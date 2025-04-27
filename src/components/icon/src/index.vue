<script setup lang="ts">
import { computed } from 'vue'
import iconJson from '@/icons/iconfont/iconfont.json'

const list = [
  {
    icon_id: '1114667',
    name: '图标',
    font_class: 'tubiao',
    unicode: 'e630',
    unicode_decimal: 58928,
  },
  {
    icon_id: '8776631',
    name: 'view',
    font_class: 'icon-test',
    unicode: 'e633',
    unicode_decimal: 58931,
  },
  {
    icon_id: '8776676',
    name: 'view_off',
    font_class: 'icon-test1',
    unicode: 'e634',
    unicode_decimal: 58932,
  },
]

//todo: 生成图标提示
const fontClasses = computed(() => list.map((item) => item.font_class))

// 如果需要类型推导
type IconName = (typeof fontClasses.value)[number]

const na: IconName = 'xx'

const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true,
  },
  color: {
    type: String,
    default: '#333639',
  },
  size: {
    type: [String, Number],
    default: 10,
  },
})

/**
 * 获取图标名称
 */
const iconName = computed(() => {
  if (props.icon) {
    return `#bs-icon-${props.icon.replace('bs-icon-', '')}`
  }
  return ''
})

const iconSize = computed(() => {
  const size = Number(props.size)
  if (size >= 10 && size <= 100) {
    return size * 0.1 + 'em'
  }
  return '1em'
})

defineOptions({
  name: 'v-icon',
})
</script>

<template>
  <svg
    class="v-icon"
    v-if="props.icon"
    aria-hidden="true"
    :style="{ '--icon-color': props.color, '--icon-size': iconSize }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.v-icon {
  width: var(--icon-size, 1em);
  height: var(--icon-size, 1em);
  overflow: hidden;
  flex-shrink: 0;
  fill: var(--icon-color, currentcolor); /* 使用 CSS 变量 */
  cursor: pointer;
  outline: none;
}
</style>
