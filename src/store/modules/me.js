const module = {
  namespaced: true,
  state: {
    nickname: '',
    avatar: ''
  },
  mutations: {
    updateNickname (state, nickname) {
      state.nickname = nickname
    },
    updateAvatar (state, avatar) {
      state.avatar = avatar
    }
  },
  actions: {
    updateNickname ({ commit, nickname }) {
      commit('updateNickname', nickname)
    }
  },
  getters: {
    me (state) {
      return state
    }
  }
}

export default module
