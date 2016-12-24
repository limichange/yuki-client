import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import me from './modules/me'
import signInDialog from './modules/signInDialog'

const store = new Vuex.Store({
  modules: {
    me,
    signInDialog
  }
})

export default store
