<script setup lang="ts">
import { ref } from 'vue'
import { AppParams } from '@/constants'
import LoginMain from './components/LoginMain.vue'
import RegisterUser from './components/RegisterUser.vue'

const isLogin = ref(true)

function toggle() {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <div class="login-container">
    <div class="left">
      <div class="title">{{ AppParams.NAME }}</div>
      <div class="desc">开箱即用，中后台前端/设计解决方案</div>
      <p>多生态支持、功能丰富、高颜值模板</p>
      <n-carousel autoplay draggable>
        <img class="img" src="./images/discussion.svg" alt="" />
        <img class="img" src="./images/email.svg" alt="" />
        <img class="img" src="./images/ai.svg" alt="" />
        <img class="img" src="./images/search.svg" alt="" />
        <img class="img" src="./images/celebrate.svg" alt="" />
      </n-carousel>
    </div>
    <div class="right">
      <div class="main">
        <div class="title">{{ isLogin ? '登录' : '注册' }}您的账户</div>
        <div class="desc">
          没有账户？<span @click="toggle"
            >{{ isLogin ? '免费注册' : '前往登录' }} <v-icon icon="right-btn"
          /></span>
        </div>
        <LoginMain v-if="isLogin" />
        <RegisterUser v-else />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.left {
  padding-top: 120px;
  width: 40%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;

  .title {
    margin-bottom: 18px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: var(--v-color-primary);
  }

  .desc {
    margin-bottom: 10px;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-top: 10px;
  }

  .img {
    margin: 0 auto;
    width: 60%;
  }
}

.right {
  padding-top: 150px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main {
    width: 380px;
  }

  .title {
    font-size: 24px;
  }

  .desc {
    margin-top: 6px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;

    span {
      color: var(--v-color-primary);
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
