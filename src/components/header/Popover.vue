<template>
  <el-popover
    :width="width"
    :visible-arrow="false"
    trigger="click"
    popper-class="header-popup"
    placement="bottom"
    @show="isOpened = true"
    @hide="isOpened = false">
    <slot/>
    <span slot="reference" class="pointer">
      <slot name="reference"/>
    </span>
  </el-popover>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        isOpened: false,
      };
    },
  };
</script>
