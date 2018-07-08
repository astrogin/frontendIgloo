<template>
  <div>
    <p>Some homepage</p>
    <el-button @click.native="openSignUp">Sign Up</el-button>
    <el-button @click.native="openSignIn">Sign In</el-button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'openSignIn',
        'openSignUp',
      ]),
    },
  };
</script>
