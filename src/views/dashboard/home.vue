<script setup lang="ts"></script>

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
      <div class="item base-bg">
        <div class="header">订单来源</div>
        <div class="main"></div>
      </div>
      <div class="item1 base-bg">
        <div class="header">用户分析</div>
        <div class="main"></div>
      </div>
    </div>
    <div class="block2"></div>
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
      // background-color: var(-n-color);
      padding: 30px;
      border-radius: 10px;
    }
  }

  .block1 {
    width: 100%;
    margin-top: 20px;
    display: flex;

    .item {
      width: 60%;
    }

    .item1 {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
