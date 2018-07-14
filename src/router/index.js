import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage';
import Notifications from '@/views/Notifications';
import Messages from '@/views/Messages';
import BecomeHostLanding from '@/views/BecomeHost/Landing';
import EditProfile from '@/views/EditProfile';
import UserExperiences from '@/views/User/experience/MyExperiences';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Homepage},
    {path: '/become-host', component: BecomeHostLanding},
    {path: '/notifications', component: Notifications},
    {path: '/messages', component: Messages},
    {path: '/edit-profile', component: EditProfile},
    {path: '/user/experiences', component: UserExperiences},
  ],
});
