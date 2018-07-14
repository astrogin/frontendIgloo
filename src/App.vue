<template>
  <el-container>
    <div v-if="asideState" class="header-aside-tint" @click="closeAside"/>
    <transition name="el-zoom-in-top">
      <el-aside v-if="asideState" width="200px" class="header-aside">
        <component :is="asideComponent"/>
      </el-aside>
    </transition>
    <el-container>
      <el-row class="w100">
        <el-col class="h100">
          <app-header/>
          <router-view/>
          <modal-container/>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  import Header from '@/layouts/Header.vue';
  import ModalContainer from '@/components/modals/ModalContainer';

  export default {
    components: {
      'app-header': Header,
      ModalContainer,
    },
    computed: {...mapGetters(['asideState', 'asideComponent'])},
    methods: {...mapActions(['closeAside'])},
  };
</script>

<style lang="scss">
   @import './styles/app.scss';
</style>
