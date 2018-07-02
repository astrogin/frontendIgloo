<template>
  <header-popover width="450">
    <p>Some notifications content</p>

    <span slot="color" class="header-item item-text">
      <font-awesome-icon icon="bell" size="lg"/>
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
