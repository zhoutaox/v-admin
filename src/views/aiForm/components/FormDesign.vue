<script setup lang="ts">
import { ref } from 'vue'
import FieldConfig from './FieldConfig.vue'
import FormConfig from './FormConfig.vue'

const show = ref(true)
</script>

<template>
  <div class="form-design-dialog">
    <n-grid class="grid" x-gap="20" :cols="5">
      <n-gi>
        <div class="components">
          <n-tabs default-value="oasis" justify-content="space-around" type="line" tab-class="tab">
            <n-tab-pane name="oasis" tab="组件">
              <n-collapse>
                <n-collapse-item title="基础组件" name="1">
                  <div>可以</div>
                </n-collapse-item>
                <n-collapse-item title="时间组件" name="2">
                  <div>很好</div>
                </n-collapse-item>
                <n-collapse-item title="上传组件" name="3">
                  <div>真棒</div>
                </n-collapse-item>
                <n-collapse-item title="布局组件" name="4">
                  <div>真棒</div>
                </n-collapse-item>
                <n-collapse-item title="高级组件" name="5">
                  <div>真棒</div>
                </n-collapse-item>
              </n-collapse>
            </n-tab-pane>
          </n-tabs>
        </div>
      </n-gi>
      <n-gi span="3" class="container">
        <div class="header">2</div>
        <div class="main"></div>
      </n-gi>
      <n-gi>
        <div class="config-area">
          <n-tabs
            default-value="oasis"
            justify-content="space-evenly"
            type="line"
            tab-class="tab"
            animated
            :tabs-padding="120"
          >
            <n-tab-pane name="oasis" tab="组件配置">
              <FieldConfig />
            </n-tab-pane>

            <n-tab-pane name="form" tab="表单配置">
              <FormConfig />
            </n-tab-pane>
          </n-tabs>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<style scoped>
.form-design-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
}

.grid {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.header {
  flex-shrink: 0;
  border-bottom: 1px solid rgb(239, 239, 245);
}

.main {
  flex-grow: 1;
  border-left: 1px solid rgb(239, 239, 245);
  border-right: 1px solid rgb(239, 239, 245);
}
</style>
