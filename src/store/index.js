import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import me from './modules/me'
import signInDialog from './modules/signInDialog'
import feeds from './modules/feeds'
import newFeed from './modules/newFeed'

const store = new Vuex.Store({
  modules: {
    me,
    signInDialog,
    feeds,
    newFeed
  }
})

export default store
