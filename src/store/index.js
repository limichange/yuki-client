import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import modules from './modules'

const store = new Vuex.Store({
  modules
})

// if (module.hot) {
//   module.hot.accept([
//     './modules'
//   ], () => {
//     store.hotUpdate({
//       modules: require('./modules')
//     })
//   })
// }

export default store
