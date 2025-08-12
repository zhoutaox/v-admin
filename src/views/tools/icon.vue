<script setup lang="ts">
function getIconList(): string[] {
  const rs: string[] = []
  const list = document.querySelectorAll('svg symbol')
  for (let i = 0; i < list.length; i++) {
    // 获取 id 并去除前缀 'bs-icon-'
    if (list[i].id.startsWith('bs-icon-')) {
      rs.push(list[i].id.replace('bs-icon-', ''))
    }
  }
  return rs
}
</script>

<template>
  <div class="main">
    <div class="item base-bg" v-for="item in getIconList()" :key="item" v-copy="item">
      <v-icon class="icon" :icon="item" :size="16" />
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
    fill: #000;
  }

  &:hover {
    background-color: #fcb040ff;
    color: #fff;

    .icon {
      fill: #fff;
    }
  }
}
</style>
