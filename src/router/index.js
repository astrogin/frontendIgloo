import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage';
import BecomeHostLanding from '@/views/BecomeHost/Landing';
import BecomeHostLayout from '@/views/BecomeHost/StepsLayout.vue';

// User
import UserLayout from '@/views/user/Layout';
import UserProfileLayout from '@/views/user/profile/Layout';
import UserProfileEdit from '@/views/user/profile/Edit';
import UserProfileView from '@/views/user/profile/View';
import UserMessages from '@/views/user/Messages';
import UserNotifications from '@/views/user/Notifications';

// Errors
import Error404 from '@/views/404';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/become-host/:step',
      name: 'become-host.step',
      component: BecomeHostLayout,
    },
    {
      path: '/become-host',
      name: 'become-host',
      component: BecomeHostLanding,
    },
    {
      path: '/user',
      name: 'user',
      component: UserLayout,
      children: [
        {
          path: 'profile',
          component: UserProfileLayout,
          children: [
            {
              path: '',
              name: 'user.profile.view',
              component: UserProfileView,
            },
            {
              path: 'edit',
              name: 'user.profile.edit',
              component: UserProfileEdit,
            },
          ],
        },
        {
          path: 'messages',
          name: 'user.messages',
          component: UserMessages,
        },
        {
          path: 'notifications',
          name: 'user.notifications',
          component: UserNotifications,
        },
      ],
    },
    {path: '/', component: Homepage},
    {path: '*', component: Error404},
  ],
});
