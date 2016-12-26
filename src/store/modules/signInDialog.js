import api from '../../api'

const module = {
  namespaced: true,
  state: {
    username: '',
    password: '',
    visible: true
  },
  mutations: {
    updateUsername: (state, username) => { state.username = username },
    updatePassword: (state, password) => { state.password = password },
    open: state => { state.visible = true },
    hide: state => { state.visible = false }
  },
  actions: {
    signIn ({ commit, state }) {
      return api.user.signIn({
        username: state.username,
        password: state.password
      }).then(() => {
        commit('hide')
      })
    }
  },
  getters: {}
}

export default module
