import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import ui from './modules/ui';
import notifications from './modules/notifications';
import comments from './modules/comments';

export default new Vuex.Store({
  modules: {
    ui,
    notifications,
    comments,
  },
});
