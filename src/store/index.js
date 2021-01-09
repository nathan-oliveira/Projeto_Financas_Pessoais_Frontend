import Vue from 'vue';
import Vuex from 'vuex';

import { stateUsuario, mutationsUsuario, actionsUsuario } from './usuario';
import { mutationsAlertas, stateAlertas, actionsAlertas } from './alertas';
import { outrosMutations, outrosState, } from './outros';
import { tableState, mutationsTable, actionsTable } from './table';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    ...stateUsuario,
    ...stateAlertas,
    ...outrosState,
    ...tableState,
  },
  mutations: {
    ...mutationsUsuario,
    ...mutationsAlertas,
    ...outrosMutations,
    ...mutationsTable,
  },
  actions: {
    ...actionsUsuario,
    ...actionsTable,
    ...actionsAlertas,
  },
  modules: {
  },
});
