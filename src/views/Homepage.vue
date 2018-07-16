<template>
  <div>
    <!-- <search-bar /> -->
    <p>Some homepage</p>
    <el-button @click.native="openSignUp">Sign Up</el-button>
    <el-button @click.native="openSignIn">Sign In</el-button>
    <br><br>
    <experience
      :owner="require('@/../public/assets/img/become-host/7.jpg')"
      :screen="require('@/../public/assets/img/become-host/5.jpg')"
      :rate="4.7"
      type="Tour"
      title="Roof49 night bar dinner"
      amount="THB 4,000"
      duration="5 Hours"
      votes="15"
      style="margin-left: 20px;"
    />
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  import SearchBar from '@/components/header/SearchBar';

  import {experience} from '@/modules/experience/cards/index';

  export default {
    components: {
      SearchBar,
      experience,
    },
    methods: {
      ...mapActions([
        'openSignIn',
        'openSignUp',
      ]),
    },
  };
</script>
