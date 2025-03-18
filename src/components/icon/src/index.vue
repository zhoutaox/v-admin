<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true,
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

defineOptions({
  name: 'v-icon',
})
</script>

<template>
  <svg class="v-icon" v-if="props.icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.v-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentcolor;
  overflow: hidden;
  flex-shrink: 0;
  color: red;
}
</style>
