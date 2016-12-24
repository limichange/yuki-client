import api from '../../api'

const module = {
  namespaced: true,
  state: {
    nickname: '',
    avatar: '',
    uuid: '',
    token: ''
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
    }
  },
  actions: {
    updateNickname ({ commit, nickname }) {
      commit('updateNickname', nickname)
    },
    getData ({ commit }) {
      api.me.get().then(({ data }) => {
        commit('updateAvatar', data.avatar)
        commit('updateNickname', data.nickname)
        commit('updateUUID', data.uuid)
      })
    }
  },
  getters: {
    me: state => state,
    uuid: state => state.uuid
  }
}

export default module
