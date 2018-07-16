<template>
  <el-button class="orange" round>
    <slot />
  </el-button>
</template>
<style scoped>
  .orange {
    height: 35px;
    width: 165px;
    border-radius: 20px;
    background: linear-gradient(134.72deg, #E22E2E 0%, #FFA841 100%);
  }
</style>
