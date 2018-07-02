<template>
  <el-header class="header">
    <span class="header-title">
      <span class="title-bold">go</span>around
    </span>

    <span class="header-right">
      <colorful-button class="header-item item-button" text="Become a Host"/>
      <menu-dropdown :elements="currencyElements" class="header-item item-text" @changed="changeCurrency"/>
      <menu-dropdown :elements="languagesElements" class="header-item item-text" @changed="changeLanguage"/>
      <span class="header-divider"/>
      <a href="#" class="header-item item-text">My Booking</a>
      <a href="#" class="header-item item-text">Saved</a>
      <a href="#" class="header-item item-text"><font-awesome-icon icon="comments" size="lg"/></a>
      <a href="#" class="header-item item-text"><font-awesome-icon icon="bell" size="lg"/></a>
      <a href="#" class="header-item item-text">Help</a>

      <el-popover
      placement="bottom"
      width="245"
      @show="isProfileOpened = true"
      @hide="isProfileOpened = false"
      :visible-arrow="false"
      trigger="click"
      popper-class="header-profile">
        <ul class="header-profile-list">
          <li class="header-profile-item" v-for="(item, index) in profileData" :key="index">
            <a :href="item.link">{{item.title}} <span v-if="!!item.badge" class="header-profile-badge">{{item.badge}}</span></a>
          </li>
        </ul>
        
        <span slot="reference" class="pointer">
          <img src="http://via.placeholder.com/45x45" class="header-item item-img"/>
          <span class="header-item item-text" :class="{'item-purple': isProfileOpened}">Christina</span>
        </span>
      </el-popover>

    </span>
  </el-header>
</template>

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
    },
  };
</script>
