<script setup lang="ts">
import { useSearchTable } from '@/hooks'
import { SearchTable } from './SearchTable'

const props = defineProps<{
  /**
   * # 配置
   */
  config: SearchTable
}>()

const {} = useSearchTable()
</script>

<template>
  <div class="search-table">
    <div class="table-search base-bg">
      <n-form ref="formRef" :label-width="80" label-placement="left" label-align="right">
        <div class="table-search-main">
          <n-form-item label="姓名" path="user.name">
            <n-input placeholder="输入姓名" />
          </n-form-item>
          <n-form-item label="年龄" path="user.age">
            <n-input placeholder="输入年龄" />
          </n-form-item>
          <n-form-item label="电话号码" path="phone">
            <n-input placeholder="电话号码" />
          </n-form-item>
          <n-form-item>
            <n-button attr-type="button"> 验证 </n-button>
          </n-form-item>
        </div>
      </n-form>
    </div>
    <div class="table-main base-bg">
      <div class="table-buttons">按钮区</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-table {
  .table-search-main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 20px;
  }

  .table-main {
    margin-top: 20px;
  }
}
</style>
