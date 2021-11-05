import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeOptions = {
  modules: {
  },
};

export const store = new Vuex.Store(storeOptions);

export default store;
