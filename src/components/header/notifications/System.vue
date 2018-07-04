<template>
  <notification :title="title" :date="date" img="http://via.placeholder.com/60/7929a6/7929a6">
    <div v-if="!!to" class="text-purple text-bold">{{to}}</div>
    <div class="notification-text">{{message}}</div>
  </notification>
</template>

<script>
  import Notification from './Notification.vue';

  export default {
    components: {
      Notification,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        default: null,
        required: false,
      },
      date: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  };
</script>
