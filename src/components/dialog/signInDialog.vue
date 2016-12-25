<template lang="pug">
  i-dialog(@close="close", @open="open", v-model="visible")
    .signInDialog
      .item
        i-input(
          @blur="updateUsername",
          v-model="username",
          placeholder="账号")
      .item
        i-input(
          @blur="updatePassword",
          v-model="password",
          placeholder="密码")
      i-button(@click="submit") 登录
</template>

<script>
  import dialog from './dialog'
  import button from '../button'
  import input from '../input'
  import api from '../../api'

  export default {
    name: 'signInDialog',
    data () {
      return {
        username: '',
        password: '',
        visible: true
      }
    },
    components: {
      'iDialog': dialog,
      'iInput': input,
      'iButton': button
    },
    methods: {
      close () {
        console.log('dialog close !')
      },
      open () {
        console.log('dialog open !')
      },
      updateUsername () {
        console.log('updateUsername')
      },
      updatePassword () {
        console.log('updatePassword')
      },
      submit () {
        const self = this

        api.user.signIn({
          username: 'asdf',
          password: 'asdf'
        }).then((res) => {
          self.visible = false
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .signInDialog
    text-align: center
    padding: 50px

  .item
    margin: 10px
</style>
