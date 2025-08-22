<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true,
  },
  color: {
    type: String,
    default: '#767c82',
  },
  size: {
    type: [String, Number],
    default: 10,
  },
  copy: {
    type: Boolean,
    default: false,
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

/**
 * 获取图标大小
 */
const iconSize = computed(() => {
  const size = Number(props.size)
  if (size >= 6 && size <= 100) {
    return size * 0.1 + 'em'
  }
  return '1em'
})
</script>

<template>
  <svg
    class="v-icon"
    v-if="props.icon"
    aria-hidden="true"
    :style="{ '--icon-color': props.color, '--icon-size': iconSize }"
    v-copy="props.copy ? iconName : undefined"
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
