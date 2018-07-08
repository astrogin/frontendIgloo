<template>
  <span>
    <el-row type="flex" justify="center">
      <el-col :span="16" class="notif">
        <div class="notif-title">Notifications</div>
        <el-row>
          <div class="notif-bar clearfix">
            <span
              :class="{'active': filter === ''}"
              class="pointer"
              @click="filter = ''">
              All
            </span>
            <span
              :class="{'active': filter === 'system'}"
              class="pointer"
              @click="filter = 'system'">
              GoAround message
            </span>
            <span
              :class="{'active': filter === 'request'}"
              class="pointer"
              @click="filter = 'request'">
              Request ( 15 )
            </span>
            <span
              :class="{'active': filter === 'review'}"
              class="pointer"
              @click="filter = 'review'">
              Review
            </span>
            <colorful-button
              v-if="filter === 'request'" class="notif-button right">
              Approve all request
            </colorful-button>
          </div>
        </el-row>
        <el-row v-for="n in filteredNotifications" :key="n.id">
          <div class="notif-line">
            <!-- <img src="http://via.placeholder.com/60/86bed8/86bed8" class="notification-image">
            <span class="notification-body">
              <div class="clearfix">
                <template v-if="n.type == 'review'">
                  <span class="notification-title">{{n.from}}</span>
                  <span class="notification-date">{{n.date}}</span>
                </template>
              </div>
            </span> -->
            <notification-review
              v-if="n.type === 'review'"
              :from="n.from"
              :to="n.to"
              :date="n.date"
              :positive="n.positive"
              :key="n.id"/>
            <notification-system
              v-if="n.type === 'system'"
              :title="n.title"
              :message="n.message"
              :to="n.to"
              :date="n.date"
              :key="n.id"/>
            <notification-request
              v-if="n.type === 'request'"
              :from="n.from"
              :to="n.to"
              :on="n.on"
              :date="n.date"
              :key="n.id"
              full/>
          </div>
        </el-row>
        <el-row v-if="filter === 'request'">
          <el-col>
            <colorful-button class="notif-button right">
              Approve all request
            </colorful-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col class="notification-pagination">
            <el-pagination :total="240" layout="prev, pager, next" background/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </span>
</template>

<script>
  import {mapGetters} from 'vuex';

  import NotificationReview from '@/components/header/notifications/Review.vue';
  import NotificationSystem from '@/components/header/notifications/System.vue';
  import NotificationRequest from '@/components/header/notifications/Request';
  import ColorfulButton from '@/components/ColorfulButton.vue';

  export default {
    components: {
      NotificationReview,
      NotificationSystem,
      NotificationRequest,
      ColorfulButton,
    },
    data() {
      return {
        filter: '',
      };
    },
    computed: {
      ...mapGetters(['notifications']),
      filteredNotifications() {
        if (this.filter === '') {
          return this.notifications;
        }

        return this.notifications.filter((notif) => {
          return notif.type === this.filter;
        });
      },
    },
  };
</script>

