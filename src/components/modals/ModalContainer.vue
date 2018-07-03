<template>
  <el-dialog
    :visible="modalState"
    :before-close="handleClose"
    :close-on-click-modal="true"
    center
    width="40%">
    <component :is="modalComponent"/>
    <div slot="footer" class="dialog-footer">
      <component :is="modalComponentFooter"/>
    </div>
  </el-dialog>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'modalState',
        'modalComponent',
        'modalComponentFooter',
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
