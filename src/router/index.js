import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage.vue';
import Notifications from '@/views/Notifications.vue';
import Messages from '@/views/Messages.vue';
import BecomeHostLanding from '@/views/BecomeHost/Landing';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Homepage},
    {path: '/become-host', component: BecomeHostLanding},
    {path: '/notifications', component: Notifications},
    {path: '/messages', component: Messages},
  ],
});
