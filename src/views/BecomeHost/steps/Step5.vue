<template>
  <div>
    <el-row>
      <el-col>
        <h4>Lastly, tell us</h4>
        <h3>What makes you to be a good host?</h3>
        <el-input
          v-model="goodHost"
          :rows="10"
          type="textarea"
          placeholder="Write here"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h3>To let you know before submit this form</h3>
        <p>
          You cannot fix or send other applications until we accept or reject this one.
        </p>
        <el-checkbox v-model="checked">
          I agree with terms and conditions and want to start to host the exp..
        </el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goodHost: '',
        checked: false,
      };
    },
  };
</script>

