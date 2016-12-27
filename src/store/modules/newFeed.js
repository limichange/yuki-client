// import api from '../../api'

const module = {
  namespaced: true,
  state: {
    title: '',
    content: '',
    author: '',
    uuid: '',
    type: '',
    date: ''
  },
  mutations: {
    updateTitle: (state, title) => { state.title = title },
    updateContent: (state, content) => { state.content = content },
    updateAuthor: (state, author) => { state.author = author },
    updateUUID: (state, uuid) => { state.uuid = uuid },
    updateType: (state, type) => { state.type = type },
    updateDate: (state, date) => { state.date = date }
  },
  actions: {},
  getters: {}
}

export default module
