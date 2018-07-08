<template>
  <notification :title="from" :date="date" img="http://via.placeholder.com/60/86bed8/86bed8">
    <div class="notification-text">has left you a review for</div>
    <div>
      <span class="text-purple text-bold">{{to}}</span>
      <span
        v-if="positive != undefined"
        :class="{
          'notification-positive': positive,
          'notification-negative': !positive,
          'notification-neutral': positive === null,
        }"
        class="right">
        {{positive === null ? 'Neutral' : positive ? 'Positive' : 'Negative'}}
      </span>
    </div>
  </notification>
</template>

<script>
  import Notification from './Notification.vue';

  export default {
    components: {
      Notification,
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
      date: {
        type: String,
        required: true,
      },
      positive: {
        type: Boolean,
        default: undefined,
      },
    },
  };
</script>
