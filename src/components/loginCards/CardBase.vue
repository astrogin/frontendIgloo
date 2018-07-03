<template>
  <el-card :class="imageClass" class="card">
    <div :class="textClass" class="card-text"><slot/></div>
  </el-card>
</template>

<script>
  export default {
    props: {
      imageClass: {
        type: String,
        default: null,
      },
      textClass: {
        type: String,
        default: null,
      },
    },
  };
</script>
