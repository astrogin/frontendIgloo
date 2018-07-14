import './icon-library';

import Vue from 'vue';
import App from './App.vue';
import router from './router/';
import store from './store/';

import Element from 'element-ui';
import ElementLocaleEN from 'element-ui/lib/locale/lang/en.js';
import ElementLocale from 'element-ui/lib/locale';

import 'element-ui/lib/theme-chalk/index.css';
// import 'slick-carousel/slick/slick.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'vue2-animate/dist/vue2-animate.min.css';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

ElementLocale.use(ElementLocaleEN);
Vue.use(Element);

Vue.config.productionTip = false;

router.afterEach((to, from) => {
  // Close aside after route changes
  store.dispatch('closeAside');
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
