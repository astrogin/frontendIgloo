import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage.vue';
import Notifications from '@/views/Notifications.vue';
import Messages from '@/views/Messages.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Homepage},
    {path: '/notifications', component: Notifications},
    {path: '/messages', component: Messages},
  ],
});
