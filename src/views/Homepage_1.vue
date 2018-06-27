<template>
  <div style="width: 100%;">
    <app-header/>
  </div>
</template>

<script>
  import Header from '@/layouts/Header.vue';

  export default {
    components: {
      'app-header': Header,
    },
  };
</script>
