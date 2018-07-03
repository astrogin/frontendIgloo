import {SET_MODAL_COMPONENT, SET_MODAL_STATE} from '@/store/mutation_types';

import SignIn from '@/components/modals/SignIn';
import SignUp from '@/components/modals/SignUp';

const state = {
  modalState: false,
  modalComponent: null,
};

const getters = {
  modalState: (state) => {
    return state.modalState;
  },
  modalComponent: (state) => {
    return state.modalComponent;
  },
};

const mutations = {
  [SET_MODAL_COMPONENT](state, payload) {
    state.modalComponent = payload;
  },
  [SET_MODAL_STATE](state, payload) {
    state.modalState = payload;
  },
};

const actions = {
  openSignIn: ({commit}) => {
    commit(SET_MODAL_COMPONENT, SignIn);
    commit(SET_MODAL_STATE, true);
  },
  openSignUp: ({commit}) => {
    commit(SET_MODAL_COMPONENT, SignUp);
    commit(SET_MODAL_STATE, true);
  },
  closeModal: ({commit}) => {
    commit(SET_MODAL_COMPONENT, null);
    commit(SET_MODAL_STATE, false);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
