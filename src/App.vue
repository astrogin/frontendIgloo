<template>
  <el-container>
    <el-row class="w100">
      <el-col class="h100">
        <app-header/>
        <router-view/>
        <modal-container/>
      </el-col>
    </el-row>
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
