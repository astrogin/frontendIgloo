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
      <span :class="{'item-purple': isOpened}">
        <slot name="color"/>
      </span>
    </span>
  </el-popover>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isOpened: false,
      };
    },
  };
</script>
