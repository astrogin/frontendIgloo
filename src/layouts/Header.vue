<template>
  <el-row>
    <el-header class="header">
      <span class="header-title">
        <router-link to="/">
          <span class="title-bold">go</span>around
        </router-link>
      </span>

      <span class="header-right">
        <router-link to="/become-host">
          <colorful-button class="header-item item-button">
            Become a Host
          </colorful-button>
        </router-link>

        <menu-dropdown
          :elements="currencyElements"
          class="header-item item-text"
          @changed="changeCurrency"/>

        <menu-dropdown
          :elements="languagesElements"
          class="header-item item-text"
          @changed="changeLanguage"/>

        <span class="header-divider"/>
        <a href="#" class="header-item item-text">My Booking</a>
        <a href="#" class="header-item item-text">Saved</a>
        <header-comments/>
        <header-notifications/>
        <a href="#" class="header-item item-text">Help</a>
        <header-profile/>
      </span>

      <span class="header-right-icon">
        <font-awesome-icon icon="bars" size="2x" @click="toggleHeaderAside"/>
      </span>
    </el-header>
  </el-row>
</template>

<script>
  import {mapActions} from 'vuex';

  import MenuDropdown from '@/ui-kit/MenuDropdown';
  import ColorfulButton from '@/ui-kit/buttons/ButtonColorful';

  import HeaderProfile from '@/components/header/Profile';
  import HeaderComments from '@/components/header/Comments';
  import HeaderNotifications from '@/components/header/Notifications';

  export default {
    components: {
      MenuDropdown,
      ColorfulButton,
      HeaderProfile,
      HeaderComments,
      HeaderNotifications,
    },

    data() {
      return {
        currencyElements: ['THB', 'USD', 'RUB'],
        languagesElements: ['EN', 'RU', 'FR'],
      };
    },

    methods: {
      ...mapActions(['toggleHeaderAside']),

      changeCurrency(newCurrency) {
        // get string by index
        // const s = this.currencyElements[newCurrency];
        // console.log(s);
      },

      changeLanguage(newLanguage) {
        // get string by index
        // const s = this.languagesElements[newLanguage];
        // console.log(s);
      },
    },
  };
</script>
