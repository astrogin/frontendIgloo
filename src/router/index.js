import Vue from 'vue';
import Router from 'vue-router';

import Homepage from '@/views/Homepage';
import BecomeHostLanding from '@/views/BecomeHost/Landing';
import BecomeHostLayout from '@/views/BecomeHost/StepsLayout';
import BecomeHostSuccess from '@/views/BecomeHost/Success';

import Experience from '@/views/Experience/Experience';

// User
import UserLayout from '@/views/User/Layout';
import UserProfileLayout from '@/views/User/profile/Layout';
import UserProfileEdit from '@/views/User/profile/Edit';
import UserProfileView from '@/views/User/profile/View';
import UserMessages from '@/views/User/Messages';
import UserNotifications from '@/views/User/Notifications';
import UserExperiences from '@/views/User/experience/Experiences';


// Errors
import Error404 from '@/views/404';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/become-host/success',
      name: 'become-host.success',
      component: BecomeHostSuccess,
    },
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
        {
          path: 'experiences',
          name: 'user.experiences',
          component: UserExperiences,
        },
      ],
    },
    {path: '/experience', name: 'experience', component: Experience},
    {path: '/', component: Homepage},
    {path: '*', component: Error404},
  ],
});
