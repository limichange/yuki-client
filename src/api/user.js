import axios from './axios'

export default {
  signIn (data) {
    return axios.post('/user/signIn', data)
  }
}
