<template lang="pug">
  i-dialog(@close="close", :visible="visible")
    .signUpDialog
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

  export default {
    name: 'signUpDialog',
    data () {
      return {
        username: '',
        email: '',
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
    }
  }
</script>

<style lang="sass">
  .signUpDialog
    width: 100%
</style>
