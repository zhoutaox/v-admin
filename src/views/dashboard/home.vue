<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import Box from './components/Box.vue'

const count = ref(100)
const { avatar } = storeToRefs(useAppStore())
const handleLoad = () => {
  count.value += 1
}
</script>

<template>
  <div class="home">
    <div class="block">
      <div class="item base-bg">
        <div class="title">
          <div class="icon-wrap"><v-icon icon="customer-add" size="16" color="#fff" /></div>
          本月注册人数
        </div>
        <div class="count">
          <n-number-animation :from="0" :to="12039" show-separator />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">
          <div class="icon-wrap">
            <v-icon icon="customer-bussinessman" size="16" color="#fff" />
          </div>
          本月登录人数
        </div>
        <div class="count">
          <n-number-animation :from="0" :to="139" show-separator />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">
          <div class="icon-wrap"><v-icon icon="goods-inspection" size="16" color="#fff" /></div>
          本月支付金额
        </div>
        <div class="count">
          <n-number-animation :from="0" :to="1209" show-separator />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">
          <div class="icon-wrap">
            <v-icon icon="discount" size="16" color="#fff" />
          </div>
          本月销售总额
        </div>
        <div class="count">
          <n-number-animation :from="0" :to="120" show-separator />
        </div>
        <div class="percent">+10%</div>
      </div>
    </div>
    <div class="block1">
      <Box class="box1" title="订单来源"> </Box>
      <Box class="box2" title="用户分析">
        <n-infinite-scroll style="height: 380px" :distance="10" @load="handleLoad">
          <div v-for="i in count" :key="i" class="item-line">
            <n-avatar round size="large" :src="avatar" />
            <div class="line">
              <div class="name">小猪{{ i }}</div>
              <div class="content">
                <n-text>高级成本会计师</n-text>
                <n-progress type="line" :percentage="60" indicator-placement="inside" processing />
              </div>
            </div>
          </div>
        </n-infinite-scroll>
      </Box>
    </div>
    <div class="block2">
      <Box class="box1" title="最新订单"></Box>
      <Box class="box2" title="消费排行">
        <n-infinite-scroll style="height: 380px" :distance="10" @load="handleLoad">
          <div v-for="i in count" :key="i" class="item-line">
            <n-avatar round size="large" :src="avatar" />
            <div class="line">
              <div class="name">小猪{{ i }}</div>
              <div class="content">
                <n-text>高级成本会计师</n-text>
                <n-progress type="line" :percentage="60" indicator-placement="inside" processing />
              </div>
            </div>
          </div>
        </n-infinite-scroll>
      </Box>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;

  .block {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    .item {
      padding: 22px 30px;
      border-radius: 10px;

      .title {
        display: flex;
        align-items: center;

        .icon-wrap {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #fbd786; //#ee9ca7 #12c2e9 #f7797d
          margin-right: 6px;
        }
      }

      .count {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }

      &:nth-child(1) {
        .icon-wrap {
          background-color: #ee9ca7;
        }
      }

      &:nth-child(2) {
        .icon-wrap {
          background-color: #f7797d;
        }
      }

      &:nth-child(4) {
        .icon-wrap {
          background-color: #12c2e9;
        }
      }
    }
  }

  .block1 {
    width: 100%;
    margin-top: 20px;
    display: flex;

    .box1 {
      width: 60%;
    }

    .box2 {
      flex: 1;
      margin-left: 20px;

      .item-line {
        display: flex;
        padding: 6px 12px;
      }

      .line {
        margin-left: 12px;

        .name {
          font-weight: bold;
        }

        .content {
          display: flex;
        }
      }
    }
  }

  .block2 {
    width: 100%;
    margin-top: 20px;
    display: flex;

    .box1 {
      width: 60%;
    }

    .box2 {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
