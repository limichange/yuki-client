import api from '../../api'

const module = {
  namespaced: true,
  state: {
    username: '',
    password: '',
    passwordAgain: '',
    visible: false
  },
  mutations: {
    updateUsername: (state, username) => { state.username = username },
    updatePassword: (state, password) => { state.password = password },
    open: state => { state.visible = true },
    close: state => { state.visible = false }
  },
  actions: {
    signIn ({ commit, state }) {
      return api.user.signIn({
        username: state.username,
        password: state.password
      }).then(() => {
        commit('me/updateStatus', true, { root: true })
        commit('close')
      })
    }
  },
  getters: {}
}

export default module
