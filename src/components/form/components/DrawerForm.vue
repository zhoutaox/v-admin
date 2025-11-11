<script setup lang="ts">
import { ref } from 'vue'
import { BaseEntity, getFormConfig } from '@/core'
import { useCrud } from '@/hooks'
import { ComponentEnum } from '@/enums'

const props = withDefaults(
  defineProps<{
    /**
     * # 关闭回调
     */
    close: () => void
    /**
     * # 实体
     */
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
  <n-drawer v-model:show="showModal" :width="520" :on-after-leave="handleAfterLeave">
    <n-drawer-content :title="formConfig.title">
      <n-form ref="formRef" :model="formModel" :rules="rules" :label-width="formConfig.labelWidth">
        <n-grid x-gap="20" :cols="formConfig.cols">
          <n-form-item-gi
            v-for="field in fieldList"
            :key="field.dbName"
            :path="field.dbName"
            :label="field.name"
          >
            <component
              :is="ComponentEnum.getComponent(field.widgetType)"
              v-model:value="formModel[field.dbName]"
              v-bind="field.props"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <template #footer>
        <n-button class="cancel-btn" @click="props.close()">取消</n-button>
        <n-button type="primary" @click="submit">确认</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.cancel-btn {
  margin-right: 12px;
}
</style>
