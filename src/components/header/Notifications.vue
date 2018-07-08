<template>
  <header-popover width="450">
    <div>
      <span class="popover-item text-purple">All</span>
      <span class="popover-item">GoAround message</span>
      <span class="popover-item">Request ( 15 )</span>
      <span class="popover-item">Review</span>
    </div>

    <template v-for="notif in smallNotifications">
      <notification-review
        v-if="notif.type === 'review'"
        :from="notif.from"
        :to="notif.to"
        :date="notif.date"
        :key="notif.id"/>
      <notification-system
        v-if="notif.type === 'system'"
        :title="notif.title"
        :message="notif.message"
        :to="notif.to"
        :date="notif.date"
        :key="notif.id"/>
      <notification-request
        v-if="notif.type === 'request'"
        :from="notif.from"
        :to="notif.to"
        :on="notif.on"
        :date="notif.date"
        :key="notif.id"/>
    </template>

    <div class="comments-button">
      <purple-button>
        <router-link to="/notifications">See more</router-link>
      </purple-button>
    </div>

    <span slot="color" class="header-item item-text">
      <el-badge is-dot class="dot-badge">
        <font-awesome-icon icon="bell" size="lg"/>
      </el-badge>
    </span>
  </header-popover>
</template>

<script>
  import HeaderPopover from './Popover';
  import PurpleButton from '@/components/PurpleButton.vue';

  import NotificationReview from './notifications/Review.vue';
  import NotificationSystem from './notifications/System.vue';
  import NotificationRequest from './notifications/Request.vue';


  import {mapGetters} from 'vuex';

  export default {
    components: {
      HeaderPopover,
      Notification,
      PurpleButton,
      NotificationReview,
      NotificationSystem,
      NotificationRequest,
    },
    computed: {
      ...mapGetters([
        'notifications',
      ]),
      smallNotifications() {
        const n = this.notifications;
        const l = n.length;

        return n.slice(0, l >= 5 ? 5 : l);
      },
    },
  };
</script>
