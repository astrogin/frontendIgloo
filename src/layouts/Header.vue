<template>
  <div>
    <el-header class="header">
      <span class="header-title">
        <router-link to="/">
          <span class="title-bold">go</span>around
        </router-link>
      </span>

      <span class="header-right">
        <colorful-button class="header-item item-button">
          Become a Host
        </colorful-button>

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
    </el-header>
    <search-bar />
  </div>
</template>

<script>
  import MenuDropdown from '@/components/MenuDropdown.vue';
  import ColorfulButton from '@/components/ColorfulButton.vue';
  import HeaderProfile from '@/components/header/Profile.vue';
  import HeaderComments from '@/components/header/Comments';
  import HeaderNotifications from '@/components/header/Notifications';
  import SearchBar from '@/components/header/SearchBar.vue';


  export default {
    components: {
      MenuDropdown,
      ColorfulButton,
      HeaderProfile,
      HeaderComments,
      HeaderNotifications,
      SearchBar,
    },

    data() {
      return {
        currencyElements: ['THB', 'USD', 'RUB'],
        languagesElements: ['EN', 'RU', 'FR'],
      };
    },

    methods: {
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
