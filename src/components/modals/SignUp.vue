<template>
  <transition name="zoom">
    <component :is="state" @click="changeState"/>
  </transition>
</template>

<script>

  import SignUp1 from '@/components/modals/SignUp.1.vue';
  import SignUp2 from '@/components/modals/SignUp.2.vue';

  export default {
    components: {
      SignUp1,
      SignUp2,
    },
    data() {
      return {
        state: SignUp1,
      };
    },
    methods: {
      changeState() {
        this.state = SignUp2;
      },
    },
  };
</script>
