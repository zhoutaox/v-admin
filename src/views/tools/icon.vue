<script setup lang="ts">
import { computed } from 'vue'
import iconJson from '@/icons/iconfont/iconfont.json'

const iconList = computed(() => {
  return iconJson.glyphs
    .map((item: { font_class: string; unicode: string }) => {
      return {
        name: item.font_class,
        code: item.unicode,
        unicode: `\\${item.unicode}`,
      }
    })
    .reverse()
})
</script>

<template>
  <div class="main">
    <div class="item base-bg" v-for="item in iconList" :key="item.code" v-copy="item.name">
      <v-icon class="icon" :icon="item.name" :size="16" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.item {
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  .icon {
    fill: #fff;
  }

  &:hover {
    background-color: #fcb040ff;
    color: #fff;
  }
}
</style>
