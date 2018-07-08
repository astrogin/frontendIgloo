<template>
  <div>
    <el-row><el-col><h1 class="dialog-title">Sign Up</h1></el-col></el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <sign-up-facebook/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <sign-up-google/>
      </el-col>
    </el-row>
    <el-row><el-col><div class="dialog-subtitle">Or</div></el-col></el-row>
    <el-row>
      <el-col>
        <sign-up-email @click.native="handleEmailClick"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SignUpFacebook from '@/components/cards/login/SignUpFacebook';
  import SignUpGoogle from '@/components/cards/login/SignUpGoogle';
  import SignUpEmail from '@/components/cards/login/SignUpEmail';

  export default {
    components: {
      SignUpFacebook,
      SignUpGoogle,
      SignUpEmail,
    },
    methods: {
      handleEmailClick() {
        this.$emit('click');
      },
    },
  };
</script>
