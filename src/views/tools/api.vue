<script setup lang="ts">
import { NButton, useMessage, useModal, type TreeOption } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
const showModal = ref(false)
import { repeat } from 'seemly'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      whateverLabel: createLabel(level),
      whateverKey: key,
      whateverChildren: createData(level - 1, key),
    }
  })
}

function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
</script>

<template>
  <div class="ee">
    <div class="tree-container base-bg">
      <n-tree
        block-line
        :data="data"
        :default-expanded-keys="defaultExpandedKeys"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
        selectable
      />
    </div>
  </div>
</template>

<style scoped>
.ee {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.tree-container {
  width: 200px;
  padding: 12px;
  overflow: hidden;
}
</style>
