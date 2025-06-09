<script setup lang="ts">
import { ref } from 'vue'

const isShowToDoDrawer = ref(false)
const todoList = ref([
  {
    isChecked: false,
    title: '完成工作台开发',
  },
  {
    isChecked: false,
    title: '完成个人中心开发',
  },
  {
    isChecked: false,
    title: '完成权限管理开发',
  },
  {
    isChecked: false,
    title: '完成系统配置开发',
  },
  {
    isChecked: false,
    title: '完成日志管理开发',
  },
  {
    isChecked: false,
    title: '完成数据字典开发',
  },
  {
    isChecked: false,
    title: '完成代码生成开发',
  },
  {
    isChecked: false,
    title: '完成在线预览开发',
  },
])

defineExpose({
  open(time: number) {
    isShowToDoDrawer.value = true
  },
})
</script>

<template>
  <n-drawer v-model:show="isShowToDoDrawer" :width="620" placement="right">
    <n-drawer-content title="我的任务">
      <div class="list">
        <div class="item base-grey-bg" v-for="item in todoList" :key="item.title">
          <div class="radius"></div>
          {{ item.title }}
        </div>
      </div>
      <template #footer>
        <div class="add item base-grey-bg">添加任务</div>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 4px;
}

.radius {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid var(--n-text-color);
  cursor: pointer;
}

.add {
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  cursor: pointer;
}
</style>
