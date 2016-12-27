import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import me from './modules/me'
import signInDialog from './modules/signInDialog'
import feeds from './modules/feeds'

const store = new Vuex.Store({
  modules: {
    me,
    signInDialog,
    feeds
  }
})

export default store
