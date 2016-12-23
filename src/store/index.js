import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import currentUser from './modules/currentUser'

const store = new Vuex.Store({
  modules: {
    currentUser
  }
})

export default store
