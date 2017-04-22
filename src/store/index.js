import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
