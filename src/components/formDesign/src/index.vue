<script setup lang="ts">
import { ref } from 'vue'

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
                <n-collapse-item title="青铜" name="1">
                  <div>可以</div>
                </n-collapse-item>
                <n-collapse-item title="白银" name="2">
                  <div>很好</div>
                </n-collapse-item>
                <n-collapse-item title="黄金" name="3">
                  <div>真棒</div>
                </n-collapse-item>
              </n-collapse>
            </n-tab-pane>
          </n-tabs>
        </div>
      </n-gi>
      <n-gi span="3">
        <div class="header">2</div>
      </n-gi>
      <n-gi>
        <div class="config-area">
          <n-tabs default-value="oasis" justify-content="space-around" type="line" tab-class="tab">
            <n-tab-pane name="oasis" tab="组件配置">
              <n-collapse>
                <n-collapse-item title="青铜" name="1">
                  <div>可以</div>
                </n-collapse-item>
                <n-collapse-item title="白银" name="2">
                  <div>很好</div>
                </n-collapse-item>
                <n-collapse-item title="黄金" name="3">
                  <div>真棒</div>
                </n-collapse-item>
              </n-collapse>
            </n-tab-pane>

            <n-tab-pane name="form" tab="表单配置">
              <n-collapse>
                <n-collapse-item title="青铜" name="1">
                  <div>可以</div>
                </n-collapse-item>
                <n-collapse-item title="白银" name="2">
                  <div>很好</div>
                </n-collapse-item>
                <n-collapse-item title="黄金" name="3">
                  <div>真棒</div>
                </n-collapse-item>
              </n-collapse>
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
</style>
