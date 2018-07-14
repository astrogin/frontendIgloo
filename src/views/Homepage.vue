<template>
  <div>
    <!-- <search-bar /> -->
    <p>Some homepage</p>
    <el-button @click.native="openSignUp">Sign Up</el-button>
    <el-button @click.native="openSignIn">Sign In</el-button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  import SearchBar from '@/components/header/SearchBar';

  export default {
    components: {
      SearchBar,
    },
    methods: {
      ...mapActions([
        'openSignIn',
        'openSignUp',
      ]),
    },
  };
</script>
