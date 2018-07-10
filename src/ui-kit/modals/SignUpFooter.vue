<template>
  <span class="dialog-footer-text">
    Already have GoAround acount?
    <a href="#" class="dialog-secondary-text" @click="openSignIn">Sign in</a>
  </span>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions(['openSignIn']),
    },
  };
</script>
