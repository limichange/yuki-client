<template lang="pug">
  i-dialog(@close="close", :visible="visible")
    .signInDialog
      .item
        i-input(
          @input="updateUsername",
          @keydown.enter="submit",
          :value="username",
          placeholder="账号")
      .item
        i-input(
          @input="updatePassword",
          @keydown.enter="submit",
          :value="password",
          type="password",
          placeholder="密码")
      i-button(@click="submit") 登录
</template>

<script>
  import dialog from './dialog'
  import button from '../button'
  import input from '../input'
  import { mapState } from 'vuex'

  export default {
    name: 'signInDialog',
    computed: mapState('signInDialog', [
      'username',
      'password',
      'visible'
    ]),
    components: {
      'iDialog': dialog,
      'iInput': input,
      'iButton': button
    },
    methods: {
      close () {
        const self = this
        self.$emit('close')
        self.$store.commit('signInDialog/close')
      },
      updateUsername (e) {
        this.$store.commit('signInDialog/updateUsername', e.target.value)
      },
      updatePassword (e) {
        this.$store.commit('signInDialog/updatePassword', e.target.value)
      },
      submit () {
        this.$store.dispatch('signInDialog/signIn')
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
