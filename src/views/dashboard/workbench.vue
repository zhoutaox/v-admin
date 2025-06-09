<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import ToDo from './components/ToDo.vue'

const value = ref(new Date().getTime())
const todoRef = ref<InstanceType<typeof ToDo> | null>(null)
const { avatar } = storeToRefs(useAppStore())
function handleUpdateValue(newValue: number) {
  todoRef.value?.open(newValue)
}
</script>

<template>
  <ToDo ref="todoRef" />
  <div class="workbench">
    <div class="box1 base-bg radius">
      <div class="title">工作台</div>
      <div class="main">
        <div class="left">
          <n-avatar round :size="60" :src="avatar" />
          <div class="info">
            <div class="name">早安，SUN，开始您一天的工作吧！</div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <n-calendar
      class="base-bg calendar radius"
      v-model:value="value"
      #="{ year, month, date }"
      @update:value="handleUpdateValue"
    >
      {{ year }}-{{ month }}-{{ date }}
    </n-calendar>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  margin-top: 20px;
}

.title {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: bold;
}

.radius {
  padding: 18px;
  border-radius: 12px;
}

.main {
  display: flex;

  .left {
    display: flex;
  }
}
</style>
