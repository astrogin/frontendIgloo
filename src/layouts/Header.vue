<template>
  <el-header class="header">
    <span class="title">
      <span class="title-bold">go</span>around
    </span>

    <span class="right">
      <colorful-button class="item item-button" text="Become a Host"/>
      <menu-dropdown :elements="['THB', 'USD', 'RUB']" class="item item-text"/>
      <menu-dropdown :elements="['EN', 'RU', 'FR']" class="item item-text"/>
      <span class="divider"/>
      <a href="#" class="item item-text">My Booking</a>
      <a href="#" class="item item-text">Saved</a>
      <a href="#" class="item item-text"><font-awesome-icon icon="comments" size="lg"/></a>
      <a href="#" class="item item-text"><font-awesome-icon icon="bell" size="lg"/></a>
      <a href="#" class="item item-text">Help</a>
      <img src="http://via.placeholder.com/45x45" class="item item-img"/>
      <a href="#" class="item item-text">Christina</a>
    </span>
  </el-header>
</template>

<style scoped>
  .header {
    height: 65px;
    border-bottom: 1px solid lightgray;
    padding: 0 49px 0 49px;
  }

  .title {
    text-transform: uppercase;
    color: #7929A6;
    font-size: 1.53em;
    font-weight: 500;
    display: inline-block;
    margin-top: 17px;
  }

  .item {
    display: inline-block;
    margin-right: 26px;
  }

  .item-text {
    margin: 21px 26px 0 0;
    color: #9B9B9B;
    font-size: 1.05em;
    text-decoration: none;
  }

  .item-img {
    vertical-align: middle;
    border-radius: 50%;
    margin: 0 7px 6px 2px;
  }

  .item-button {
    margin-bottom: 20px;
  }

  .divider {
    display: inline-block;
    vertical-align: middle;
    width: 2px;
    height: 60%;
    margin: 0 20px 6px 0;
    background-color: lightgray;
  }

  .title-bold {
    font-weight: 700;
  }

  .right {
    height: 100%;
    float: right;
  }
</style>

<script>
  import MenuDropdown from '@/components/MenuDropdown.vue';
  import ColorfulButton from '@/components/ColorfulButton.vue'

  export default {
    components: {
      MenuDropdown, 
      ColorfulButton
    }
  };
</script>
