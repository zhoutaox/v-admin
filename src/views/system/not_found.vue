<script setup lang="ts">
function back() {
  window.history.back()
}
</script>

<template>
  <div class="main">
    <img class="not-found" src="./images/not_found.svg" alt="" />
    <n-button class="back" type="primary" @click="back()" size="large">返回上一页</n-button>
  </div>
</template>

<style scoped>
.main {
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.not-found {
  width: 32%;
}

.back {
  margin-top: 20px;
}
</style>
