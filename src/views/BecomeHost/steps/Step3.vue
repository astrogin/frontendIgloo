<template>
  <div>
    <el-row>
      <el-col>
        <h1>Your city</h1>
        <el-input type="text" placeholder="Your city"/>
        <div class="bh-steps-input-error">
          <div class="title">
            Sorry, your city is out of our reach
          </div>
          <p>
            Many text Many text Many text Many text Many text Many text
            Many text Many text Many text Many text Many text Many text
            Many text Many text Many text Many text Many text Many text
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h2>Have you hosted an experience before?</h2>
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

