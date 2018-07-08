<template>
  <popover :width="width">
    <slot/>
    <span slot="reference">
      <el-button size="small" class="searchbar-button" round>
        <span class="searchbar-button-text">
          {{text}} <font-awesome-icon v-if="arrow" icon="angle-down"/>
        </span>
      </el-button>
    </span>
  </popover>
</template>

<script>
  import Popover from './Popover';

  export default {
    components: {
      Popover,
    },
    props: {
      width: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      arrow: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>
