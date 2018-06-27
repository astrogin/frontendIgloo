import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Homepage_1.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
