import './icon-library';

import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'vue2-animate/dist/vue2-animate.min.css';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
