import { Module, MutationTree } from 'vuex';

import { LoadingState } from '@/store/loading/types';

// state
const state: LoadingState = {
  isLoading: false,
  fullPage: true
};

// mutations
const mutations: MutationTree<LoadingState> = {
  startLoading(state: LoadingState) {
    state.isLoading = true;
  },
  closeLoading(state: LoadingState) {
    state.isLoading = false;
  }
};

// getters
const getters = {};

// actions
const actions = {};

export const loadingModule: Module<LoadingState, {}> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
