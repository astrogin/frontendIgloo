<template>
  <div>
    <el-row><el-col><h1 class="dialog-title">Sign In</h1></el-col></el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <sign-in-facebook/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <sign-in-google/>
      </el-col>
      <el-row><el-col><div class="dialog-subtitle">Or</div></el-col></el-row>
    </el-row>
    <el-row>
      <el-col>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.email" placeholder="Email address">
              <font-awesome-icon
                slot="prefix"
                size="lg"
                icon="envelope"
                class="el-input__icon"/>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" type="password" placeholder="Password">
              <font-awesome-icon
                slot="prefix"
                size="lg"
                icon="lock"
                class="el-input__icon"/>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SignInFacebook from '@/components/loginCards/SignInFacebook.vue';
  import SignInGoogle from '@/components/loginCards/SignInGoogle.vue';

  export default {
    components: {
      SignInFacebook,
      SignInGoogle,
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      onSubmit() {

      },
    },
  };
</script>

<style scoped>
  .el-input__icon {
    padding: 0 5px;
  }
</style>
