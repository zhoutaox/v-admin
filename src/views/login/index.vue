<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { ref } from 'vue'
import { LogoWechat } from '@vicons/ionicons5'
import { api } from '@/api'
import { AppConfig } from '@/enums'
import { showNoOpenMessage } from '@/utils'

const formRef = ref<FormInst | null>(null)

const formValue = ref({
  user: {
    username: '',
    password: '',
  },
  phone: '',
})

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      // api.user.login(formValue.value.user)
      // api.user.get('1')
    } else {
      console.log(errors)
      // message.error('Invalid')
    }
  })
}

const rules = {
  user: {
    username: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur'],
    },
  },
}
</script>

<template>
  <div class="login-container">
    <div class="left">
      <div class="title">{{ AppConfig.PRODUCT_NAME }}</div>
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
        <div class="title">登录您的账户</div>
        <div class="desc">
          没有账户？<span @click="showNoOpenMessage"
            >免费注册 <v-icon icon="right-btn"></v-icon
          ></span>
        </div>
        <div class="tabs">
          <div class="tab-item active">账号密码登录</div>
          <div class="tab-item" @click="showNoOpenMessage">手机验证码登录</div>
        </div>
        <div style="position: relative">
          <n-form ref="formRef" :model="formValue" :rules="rules" :show-label="false" size="large">
            <n-form-item path="user.username" style="margin-bottom: 10px">
              <n-input v-model:value="formValue.user.username" placeholder="输入姓名">
                <template #prefix
                  ><v-icon :size="12" icon="customer-center" color="rgba(194, 194, 194, 1)"
                /></template>
              </n-input>
            </n-form-item>
            <n-form-item path="user.password">
              <n-input v-model:value="formValue.user.password" placeholder="输入密码">
                <template #prefix
                  ><v-icon :size="12" icon="lock-fill" color="rgba(194, 194, 194, 1)"
                /></template>
              </n-input>
            </n-form-item>
            <n-form-item>
              <div class="remember">
                <n-checkbox>记住密码</n-checkbox><span @click="showNoOpenMessage">忘记密码?</span>
              </div>
            </n-form-item>
            <n-form-item>
              <n-button attr-type="button" type="primary" block round @click="handleValidateClick">
                登录
              </n-button>
            </n-form-item>
          </n-form>
        </div>

        <n-divider> 其他登录方式 </n-divider>
        <div class="other-login-way">
          <n-popover trigger="hover">
            <template #trigger>
              <n-button circle>
                <template #icon>
                  <n-icon class="icon" :component="LogoWechat" :size="22" />
                </template>
              </n-button>
            </template>
            <span>微信扫码登录</span>
          </n-popover>
        </div>
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

  .tabs {
    padding: 4px 6px;
    width: auto;
    display: inline-flex;
    align-items: center;
    margin-bottom: 26px;
    background-color: #f3f7fb;
    border-radius: 4px;
    .tab-item {
      padding: 4px 12px;
      cursor: pointer;

      &.active {
        background-color: #fff;
        border-radius: 4px;
        color: var(--v-color-primary);
      }
    }
  }

  .remember {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      cursor: pointer;
      color: var(--v-color-primary);
    }
  }
}

.other-login-way {
  display: flex;
  justify-content: center;

  .icon {
    cursor: pointer;
  }
}
</style>
