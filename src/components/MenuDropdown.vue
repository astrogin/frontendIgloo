<template>
  <el-dropdown trigger="click" @command="setCurrent">
    <span class="el-dropdown-link">
      {{currentElement}} <font-awesome-icon icon="angle-down"/>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(element, index) in elements" :key="index" :command="index">{{element}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      elements: Array,
    },
    computed: {
      currentElement() {
        return this.elements[this.currentIndex];
      }
    },

    methods: {
      setCurrent(index) {
        this.currentIndex = index;
        //this.$emit('update:title', newTitle)
      }
    }
  };
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
  }
</style>
