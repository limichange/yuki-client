import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import me from './modules/me'
import signInDialog from './modules/signInDialog'
import feed from './modules/feed'

const store = new Vuex.Store({
  modules: {
    me,
    signInDialog,
    feed
  }
})

export default store
