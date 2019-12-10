import Vue from 'vue';
import Vuex from 'vuex';

import { loadingModule } from './loading/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loadingModule
  }
});
