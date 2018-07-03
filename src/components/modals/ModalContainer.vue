<template>
  <el-dialog
    :visible="modalState"
    :before-close="handleClose"
    :close-on-click-modal="true"
    title="Tips"
    width="30%">
    <component :is="modalComponent"/>
  </el-dialog>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'modalComponent',
        'modalState',
      ]),
    },
    methods: {

      ...mapActions([
        'closeModal',
      ]),

      handleClose(done) {
        this.closeModal().then(() => {
          done();
        });
      },
    },
  };
</script>

