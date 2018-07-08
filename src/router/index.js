import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Notifications from '@/views/Notifications.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/notifications',
      component: Notifications,
    },
  ],
});
