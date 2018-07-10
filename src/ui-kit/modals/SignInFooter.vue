<template>
  <span class="dialog-footer-text">
    Don't have GoAround account?
    <a href="#" class="dialog-secondary-text" @click="openSignUp">Sign up</a>
  </span>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions(['openSignUp']),
    },
  };
</script>

