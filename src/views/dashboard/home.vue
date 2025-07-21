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
        <div class="title">本月注册人数</div>
        <div class="count">
          <n-number-animation :from="0" :to="12039" />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">本月登录人数</div>
        <div class="count">
          <n-number-animation :from="0" :to="139" />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">本月支付金额</div>
        <div class="count">
          <n-number-animation :from="0" :to="1209" />
        </div>
        <div class="percent">+10%</div>
      </div>
      <div class="item base-bg">
        <div class="title">本月销售总额</div>
        <div class="count">
          <n-number-animation :from="0" :to="120" />
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
              <div class="name">小猪</div>
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
      <Box class="box2" title="消费排行"></Box>
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
      padding: 30px;
      border-radius: 10px;
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
