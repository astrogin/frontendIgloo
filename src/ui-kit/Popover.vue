<template>
  <el-popover
    v-model="isOpened"
    :width="width"
    :visible-arrow="false"
    popper-class="header-popup"
    placement="bottom"
    @show="handleShow(true)"
    @hide="handleShow(false)">
    <slot/>
    <span slot="reference" class="pointer">
      <slot name="reference"/>
      <span :class="{'item-purple': isActive}">
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
      state: {
        type: Boolean,
        default: null,
      },
      active: {
        type: Boolean,
        default: null,
      },
    },
    data() {
      return {
        $_isOpened: false,
      };
    },
    computed: {
      isOpened: {
        get: function() {
          return this.state === null ? this.$_isOpened : this.state;
        },
        set: function(nv) {
          this.handleShow(nv);
        },
      },
      isActive() {
        return this.active === null ? this.isOpened : this.active;
      },
    },
    methods: {
      handleShow(value) {
        this.$_isOpened = value;
        if (this.state !== null) {
          this.$emit('update:state', value);
        }
      },
    },
  };
</script>
