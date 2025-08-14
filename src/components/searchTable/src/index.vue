<script setup lang="ts">
import { useSearchTable } from '@/hooks'
import { SearchTable } from './SearchTable'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, NDataTable } from 'naive-ui'
import { h } from 'vue'
import { renderIcon } from '@/utils'
import { Log } from '@/core'
import SearchForm from '../components/SearchForm.vue'

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
  searchTable: SearchTable
}>()

function doFn(fn: string) {
  const method = props.searchTable.fnClass[fn]
  if (typeof method === 'function') {
    method(searchParams)
  } else {
    Log.error(new Error(`Method ${fn} is not defined in fnClass`))
  }
}

const {
  tableRef,
  searchParams,
  containerRef,
  operationButtonList,
  isFullscreen,
  toggleFullscreen,
  search,
  reset,
  downloadCsv,
} = useSearchTable()
</script>

<template>
  <div class="search-table">
    <div v-if="searchTable.searchList.length" class="table-search base-bg">
      <SearchForm
        v-model="searchParams"
        :fields="searchTable.searchList"
        @search="search"
        @reset="reset"
      >
      </SearchForm>
    </div>
    <div ref="containerRef" class="table-main base-bg">
      <div class="table-buttons">
        <n-space v-if="searchTable.buttonList.length">
          <template v-for="button in searchTable.buttonList" :key="button.iid">
            <n-dropdown v-if="button.children.length" :options="button.children">
              <n-button>{{ button.name }}</n-button>
            </n-dropdown>
            <n-button
              v-else
              :type="button.type"
              :render-icon="renderIcon(button.icon)"
              @click="doFn(button.methodId)"
              >{{ button.name }}</n-button
            >
          </template>
        </n-space>
        <n-space class="table-actions">
          {{ isFullscreen }}
          <n-tooltip v-for="button in operationButtonList" :key="button.label">
            <template #trigger>
              <n-button @click="button.onClick" size="small" secondary circle>
                <template #icon> <v-icon size="8" :icon="button.icon" /> </template>
              </n-button>
            </template>
            {{ button.label }}
          </n-tooltip>
          <!-- <n-button size="small" secondary circle>
            <template #icon>
              <v-icon icon="search" />
            </template>
          </n-button>
          <n-button @click="toggleFullscreen" size="small" secondary circle>
            <template #icon>
              <v-icon size="8" icon="fullscreen" />
            </template>
          </n-button>
          <n-button @click="downloadCsv" size="small" strong secondary circle>
            <template #icon>
              <v-icon icon="download" />
            </template>
          </n-button> -->
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
    margin-bottom: 20px;
    padding: 0 20px;
    padding-top: 26px;
    border-radius: 8px;
  }

  .table-main {
    padding: 20px;
    border-radius: 8px;

    .table-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }

    .table-actions {
      margin-left: auto;
    }
  }
}
</style>
