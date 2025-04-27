<script setup lang="ts">
import { ref } from 'vue'
import { BaseEntity, getFormConfig } from '@/core'
import { useCrud } from '@/hooks/useCurd'
import FormItem from './FormItem'

const props = withDefaults(
  defineProps<{
    close: () => void
    entity: new () => BaseEntity
  }>(),
  {
    close: () => {},
  },
)

const { fieldList, rules, formModel, submit, formRef } = useCrud(props.entity)
const showModal = ref(true)
const formConfig = ref(getFormConfig(props.entity))

function handleAfterLeave() {
  props?.close()
}
</script>

<template>
  <n-modal
    v-model:show="showModal"
    :on-after-leave="handleAfterLeave"
    :draggable="true"
    preset="card"
    style="width: 600px"
    :title="formConfig.title"
  >
    <n-form ref="formRef" :model="formModel" :rules="rules">
      <n-form-item
        v-for="field in fieldList"
        :path="field.propertyKey"
        :label="field.label"
        :key="field.propertyKey"
      >
        <FormItem
          v-model:value="formModel[field.propertyKey]"
          :componentType="field.type"
          :options="field.options"
          :placeholder="'请输入' + field.label"
        />
      </n-form-item>
    </n-form>

    <template #footer>
      <div style="text-align: right">
        <n-button class="cancel-btn" @click="props.close()">取消</n-button>
        <n-button type="primary" @click="submit">确认</n-button>
      </div>
    </template>
  </n-modal>
</template>

<style scoped>
.cancel-btn {
  margin-right: 10px;
}
</style>
