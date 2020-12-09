import Vue from 'vue';
import Vuex from 'vuex';

import { stateUsuario, mutationsUsuario, actionsUsuario } from './usuario';
import { mutationsAlertas, stateAlertas } from './alertas';
import { outrosMutations, outrosState } from './outros';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    ...stateUsuario,
    ...stateAlertas,
    ...outrosState,
  },
  mutations: {
    ...mutationsUsuario,
    ...mutationsAlertas,
    ...outrosMutations,
  },
  actions: {
    ...actionsUsuario,
  },
  modules: {
  },
});
