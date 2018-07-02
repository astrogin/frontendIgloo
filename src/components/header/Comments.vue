<template>
  <header-popover width="450">
    <p>Some content</p>

    <span slot="reference">
      <span href="#" class="header-item item-text">
        <font-awesome-icon icon="comments" size="lg"/>
      </span>
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

