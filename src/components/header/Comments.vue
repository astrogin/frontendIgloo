<template>
  <header-popover width="450">
    <div>
      <span class="popover-item">Recent</span>
      <span class="popover-item">Accepted experience</span>
    </div>

    <span slot="color" class="header-item item-text">
      <font-awesome-icon icon="comments" size="lg"/>
    </span>
  </header-popover>
</template>

<script>
  import Popover from './Popover';

  export default {
    components: {
      'header-popover': Popover,
    },
    data() {
      return {

      };
    },
  };
</script>

<style scoped>
  .popover-item {
    margin: 13px;
  }
</style>
