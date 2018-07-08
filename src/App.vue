<template>
  <el-container>
    <div class="w100">
      <app-header/>
      <router-view/>
      <modal-container/>
    </div>
  </el-container>
</template>

<script>
  import Header from '@/layouts/Header.vue';
  import ModalContainer from '@/components/modals/ModalContainer';

  export default {
    components: {
      'app-header': Header,
      ModalContainer,
    },
  };
</script>

<style lang="scss">
   @import './styles/app.scss';
</style>
