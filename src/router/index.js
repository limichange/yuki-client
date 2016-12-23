import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import indexView from '../views/indexView'

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', name: 'index', component: indexView }
  ]
})
