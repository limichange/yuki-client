import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import me from './modules/me'

const store = new Vuex.Store({
  modules: {
    me
  }
})

export default store
