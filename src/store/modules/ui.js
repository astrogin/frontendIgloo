import {
  SET_MODAL_COMPONENT,
  SET_MODAL_STATE,
  SET_MODAL_COMPONENT_FOOTER} from '@/store/mutation_types';

import SignIn from '@/ui-kit/modals/SignIn.vue';
import SignInFooter from '@/ui-kit/modals/SignInFooter.vue';
import SignUp from '@/ui-kit/modals/SignUp.vue';
import SignUpFooter from '@/ui-kit/modals/SignUpFooter.vue';

const state = {
  modalState: false,
  modalComponent: null,
  modalComponentFooter: null,
};

const getters = {
  modalState: (state) => {
    return state.modalState;
  },
  modalComponent: (state) => {
    return state.modalComponent;
  },
  modalComponentFooter: (state) => {
    return state.modalComponentFooter;
  },
};

const mutations = {
  [SET_MODAL_STATE](state, payload) {
    state.modalState = payload;
  },
  [SET_MODAL_COMPONENT](state, payload) {
    state.modalComponent = payload;
  },
  [SET_MODAL_COMPONENT_FOOTER](state, payload) {
    state.modalComponentFooter = payload;
  },
};

const actions = {
  openSignIn: ({commit}) => {
    commit(SET_MODAL_COMPONENT, SignIn);
    commit(SET_MODAL_COMPONENT_FOOTER, SignInFooter);
    commit(SET_MODAL_STATE, true);
  },
  openSignUp: ({commit}) => {
    commit(SET_MODAL_COMPONENT, SignUp);
    commit(SET_MODAL_COMPONENT_FOOTER, SignUpFooter);
    commit(SET_MODAL_STATE, true);
  },
  closeModal: ({commit}) => {
    commit(SET_MODAL_COMPONENT, null);
    commit(SET_MODAL_COMPONENT_FOOTER, null);
    commit(SET_MODAL_STATE, false);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
