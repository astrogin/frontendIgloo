<template>
  <notification :title="from" :date="date" img="http://via.placeholder.com/60/00aaaf/00aaaf">
    <div class="notification-text">Requested to have your experience</div>
    <div v-if="full">
      <span class="text-purple text-bold">{{to}}</span>
      <span class="text-purple bad-margin right">on {{on}}</span>
    </div>
    <template v-else>
      <div class="text-purple text-bold">{{to}}</div>
      <div class="text-purple bad-margin">{{on}}</div>
    </template>
    
    <div class="bad-margin notification-buttons">
      <purple-button>Approve</purple-button>
      <span class="notification-text notification-button">Reject</span>
    </div>
  </notification>
</template>

<script>
  import Notification from './Notification.vue';
  import PurpleButton from '@/components/PurpleButton.vue';

  export default {
    components: {
      Notification,
      PurpleButton,
    },
    props: {
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
      on: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      full: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>
  .bad-margin {
    /* TODO: Смещение как-то по другому надо делать */
    margin-left: 80px;
  }
</style>
