const module = {
  namespaced: true,
  state: {
    nickname: '',
    avatar: '',
    uuid: ''
  },
  mutations: {
    updateNickname (state, nickname) {
      state.nickname = nickname
    },
    updateAvatar (state, avatar) {
      state.avatar = avatar
    },
    updateUUID (state, uuid) {
      state.uuid = uuid
    }
  },
  actions: {
    updateNickname ({ commit, nickname }) {
      commit('updateNickname', nickname)
    }
  },
  getters: {
    me: state => state,
    uuid: state => state.uuid
  }
}

export default module
