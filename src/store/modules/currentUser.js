const module = {
  namespace: 'currentUser/',
  state: {
    nickname: 'houyao',
    avatar: 'http://tva3.sinaimg.cn/crop.0.0.1000.1000.50/640be1fbjw8eoguijlr7fj20rs0rttba.jpg'
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
