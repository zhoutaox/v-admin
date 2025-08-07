<script setup lang="ts">
import { useSearchTable } from '@/hooks'
import { SearchTable } from './SearchTable'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, NDataTable } from 'naive-ui'
import { h, onMounted, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns({
  sendMail,
}: {
  sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Age',
      key: 'age',
    },
    {
      title: 'Address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px',
              },
              type: 'info',
              bordered: false,
            },
            {
              default: () => tagKey,
            },
          )
        })
        return tags
      },
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            onClick: () => sendMail(row),
          },
          { default: () => 'Send Email' },
        )
      },
    },
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['wow'],
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
}

// const tableRef = ref<InstanceType<typeof NDataTable>>()
const data = createData()
const columns = createColumns({
  sendMail(rowData) {
    // message.info(`send mail to ${rowData.name}`)
  },
})

const pagination = {
  pageSize: 10,
}

const props = defineProps<{
  /**
   * # 配置
   */
  config: SearchTable
}>()

const { tableRef } = useSearchTable()
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
            <n-space>
              <n-button attr-type="button" type="primary">检索</n-button>
              <n-button>重置</n-button>
            </n-space>
          </n-form-item>
        </div>
      </n-form>
    </div>
    <div class="table-main base-bg">
      <div class="table-buttons">
        <n-space>
          <n-button>Default</n-button>
          <n-button type="tertiary"> Tertiary </n-button>
          <n-button type="primary"> Primary </n-button>
          <n-button type="info"> Info </n-button>
          <n-button type="success"> Success </n-button>
          <n-button type="warning"> Warning </n-button>
          <n-button type="error"> Error </n-button>
        </n-space>
      </div>
      <n-space vertical :size="12">
        <n-data-table
          ref="tableRef"
          :bordered="false"
          :single-line="false"
          :columns="columns"
          :data="data"
          :pagination="pagination"
        />
      </n-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-table {
  .table-search {
    padding: 20px;
    border-radius: 8px;
  }
  .table-search-main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 20px;
    align-items: center;
  }

  .table-main {
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;

    .table-buttons {
      margin-bottom: 18px;
    }
  }
}
</style>
