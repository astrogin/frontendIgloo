<template>
  <span>
    <span>This is a sign in</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">
        Confirm
      </el-button>
    </span>
  </span>
</template>

<script>
  export default {

  };
</script>
