import api from '../../api'

const module = {
  namespaced: true,
  state: [],
  mutations: {
    set (state, feed) {
      state.push(...feed)
    },
    clear (state) {
      while (state.length > 0) {
        state.pop()
      }
    },
    add (state, feed) {
      state.push(feed)
    }
  },
  actions: {
    getData ({ commit }) {
      api.feed.get().then((res) => {
        commit('clear')
        commit('set', res.data)
      })
    },
    add ({ commit }, feed) {
      commit('add', feed)
    }
  },
  getters: {}
}

export default module
