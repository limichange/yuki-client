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
  actions: {},
  getters: {}
}

export default module
