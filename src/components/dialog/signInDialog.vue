<template lang="pug">
  yuki-dialog(@close="close", @open="open", v-model="visible")
    .signInDialog
      .item
        label 账号：
          input(v-model="username")
      .item
        label 密码：
          input(v-model="password")
      button(@click="submit") 登录
</template>

<script>
  import dialog from './dialog'
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
      'yukiDialog': dialog
    },
    methods: {
      close () {
        console.log('dialog close !')
      },
      open () {
        console.log('dialog open !')
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
