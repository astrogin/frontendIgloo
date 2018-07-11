<template>
  <el-button round>
    <span class="text"><slot/></span>
  </el-button>
</template>

<style scoped>
  .text {
    color: white;
    font-weight: bold;
  }

  .el-button {
    background: #4CDDBC;
  }

  .el-button:hover, .el-button:focus {
    color: #4CDDBC;
    border-color: #4CDDBC;
    background-color: #4CDDBC;
  }
</style>
