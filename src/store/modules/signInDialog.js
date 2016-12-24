const module = {
  namespaced: true,
  state: {
    username: '',
    password: '',
    visible: false
  },
  mutations: {
    updateUsername: (state, username) => { state.username = username },
    updatePassword: (state, password) => { state.password = password },
    show: state => { state.visible = true },
    hide: state => { state.visible = false }
  },
  actions: {},
  getters: {}
}

export default module
