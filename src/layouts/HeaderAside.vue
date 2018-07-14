<template>
  <div class="header-aside-container">
    <div class="group">
      <div>
        <router-link :to="{name: 'become-host'}">
          <button-colorful>Become a Host</button-colorful>
        </router-link>
      </div>
      <div><menu-dropdown :elements="['THB', 'USD', 'RUB']"/></div>
      <div><menu-dropdown :elements="['EN', 'RU', 'FR']"/></div>
    </div>

    <div class="group">
      <div><a href="#">My Booking</a></div>
      <div><a href="#">Saved</a></div>
      <div>
        <el-badge is-dot class="dot-badge">
          <font-awesome-icon icon="comments" size="lg"/>
        </el-badge>
      </div>
      <div>
        <el-badge is-dot class="dot-badge">
          <font-awesome-icon icon="bell" size="lg"/>
        </el-badge>
      </div>
      <div><a href="#">Help</a></div>
    </div>

    <div class="group">
      <div>Edit profile</div>
      <div>My experiences <span class="header-profile-badge">8</span></div>
      <div>Review</div>
      <div>Account settings</div>
      <div>Refer host</div>
      <div>Log out</div>
    </div>
  </div>
</template>

<script>
  import ButtonColorful from '@/ui-kit/buttons/ButtonColorful';
  import MenuDropdown from '@/ui-kit/MenuDropdown';

  export default {
    components: {
      ButtonColorful,
      MenuDropdown,
    },
  };
</script>
