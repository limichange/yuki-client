const module = {
  namespace: 'currentUser/',
  state: {
    nickname: 'houyao'
  },
  mutations: {
    updateNickname (state, nickname) {
      state.nickname = nickname
    }
  },
  actions: {
    updateNickname ({ commit, nickname }) {
      commit('updateNickname', nickname)
    }
  },
  getters: {
    currentUser (state) {
      return state
    }
  }
}

export default module
