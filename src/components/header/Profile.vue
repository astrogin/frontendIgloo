<template>
  <header-popover width="245">
    <ul class="header-profile-list">
      <li
        v-for="(item, index) in profileData"
        :key="index" class="header-profile-item">

        <router-link :to="item.link">
          {{item.title}}
          <span v-if="!!item.badge" class="header-profile-badge">
            {{item.badge}}
          </span>
        </router-link>
      </li>
    </ul>
    <img slot="reference" src="http://via.placeholder.com/45x45" class="header-item item-img">
    <span slot="color" class="header-item item-text">Christina</span>
  </header-popover>
</template>

<script>
  import HeaderPopover from '@/ui-kit/Popover';

  export default {
    components: {
      HeaderPopover,
    },
    data() {
      return {
        profileData: [
          {title: 'Edit profile', link: {name: 'user.profile.edit'}},
          {title: 'My experiences', link: {name: 'user.experiences'}, badge: 8},
          {title: 'Review', link: '#'},
          {title: 'Account settings', link: '#'},
          {title: 'Refer host', link: '#'},
          {title: 'Logout', link: '#'},
        ],
      };
    },
  };
</script>
