<template>
  <div>
    <el-row>
      <el-col>
        <h1>Your city</h1>
        <el-input type="text" placeholder="Your city"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h1>Have you hosted an experience before?</h1>
        <div>
          <el-radio v-model="hosted" label="true">
            Yes, I've done this before
          </el-radio>
        </div>
        <div>
          <el-radio v-model="hosted" label="false">
            No, not yet!
          </el-radio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hosted: 'false',
      };
    },
  };
</script>

