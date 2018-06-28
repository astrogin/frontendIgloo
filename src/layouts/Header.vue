<template>
  <el-header class="header">
    <span class="title">
      <span class="title-bold">go</span>around
    </span>

    <span class="right">
      <colorful-button class="item item-button" text="Become a Host"/>
      <menu-dropdown :elements="currencyElements" class="item item-text" @changed="changeCurrency"/>
      <menu-dropdown :elements="languagesElements" class="item item-text" @changed="changeLanguage"/>
      <span class="divider"/>
      <a href="#" class="item item-text">My Booking</a>
      <a href="#" class="item item-text">Saved</a>
      <a href="#" class="item item-text"><font-awesome-icon icon="comments" size="lg"/></a>
      <a href="#" class="item item-text"><font-awesome-icon icon="bell" size="lg"/></a>
      <a href="#" class="item item-text">Help</a>

      <el-popover
      placement="bottom"
      width="245"
      @show="profileTrigger"
      @hide="profileTrigger"
      :visible-arrow="false"
      trigger="click"
      popper-class="profile">
        <ul class="profile-list">
          <li class="profile-item" v-for="(item, index) in profileData" :key="index">
            <a :href="item.link">{{item.title}} <span v-if="!!item.badge" class="profile-badge">{{item.badge}}</span></a>
          </li>
        </ul>
        
        <span slot="reference" class="pointer">
          <img src="http://via.placeholder.com/45x45" class="item item-img"/>
          <span class="item item-text" :class="{'item-purple': isProfileOpened}">Christina</span>
        </span>
      </el-popover>

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
    margin-bottom: 5px;
    vertical-align: middle;
  }

  .item-purple {
    color: #7929a6;
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

  .pointer {
    cursor: pointer;
  }

  .profile-list {
    list-style-type: none;
    padding-left: 16px;
  }

  .profile-badge {
    padding: 0 10px;
    border-radius: 35%;
    background-color: #7929a6;
    color: white;
    float: right;
    vertical-align: middle;
    font-size: 0.85em;
  }

  .profile-item {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  li.profile-item > a:link, li.profile-item > a:visited {
    text-decoration: none;
    color: inherit;
  }
</style>

<script>
  import MenuDropdown from '@/components/MenuDropdown.vue';
  import ColorfulButton from '@/components/ColorfulButton.vue'

  export default {
    components: {
      MenuDropdown, 
      ColorfulButton
    },

    data() {
      return {
        currencyElements: ['THB', 'USD', 'RUB'],
        languagesElements: ['EN', 'RU', 'FR'],
        isProfileOpened: false,
        profileData: [
          {title: 'Edit profile', link: '#'},
          {title: 'My experiences', link: '#', badge: 8},
          {title: 'Review', link: '#'},
          {title: 'Account settings', link: '#'},
          {title: 'Refer host', link: '#'},
        ],
      };
    },
    computed: {

    },

    methods: {
      changeCurrency(newCurrency) {
        // get string by index
        const s = this.currencyElements[newCurrency];
        console.log(s);
      },

      changeLanguage(newLanguage) {
        // get string by index
        const s = this.languagesElements[newLanguage];
        console.log(s);
      },

      profileTrigger() {
        this.isProfileOpened = !this.isProfileOpened;
      },
    },
  };
</script>
