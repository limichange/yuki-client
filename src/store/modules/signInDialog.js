const module = {
  namespaced: true,
  state: {
    username: '',
    password: ''
  },
  mutations: {
    updateUsername: (state, username) => { state.username = username },
    updatePassword: (state, password) => { state.password = password }
  },
  actions: {},
  getters: {}
}

export default module
