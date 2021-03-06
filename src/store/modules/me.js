import api from '../../api'

const module = {
  namespaced: true,
  state: {
    nickname: '',
    avatar: '',
    uuid: '',
    token: '',
    isLogIn: true
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
    },
    updateToken (state, token) {
      state.token = token
    },
    updateStatus (state, status) {
      state.isLogIn = status
    }
  },
  actions: {
    updateNickname ({ commit, nickname }) {
      commit('updateNickname', nickname)
    },
    getData ({ commit }) {
      return api.me.get().then(({ data }) => {
        commit('updateAvatar', data.avatar)
        commit('updateNickname', data.nickname)
        commit('updateUUID', data.uuid)
      })
    },
    signOut ({ commit }) {
      commit('updateStatus', false)
    }
  },
  getters: {
    me: state => state,
    uuid: state => state.uuid
  }
}

export default module
