<template lang="pug">
  yuki-dialog
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

  export default {
    name: 'signInDialog',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      'yukiDialog': dialog
    },
    methods: {
      submit () {
        console.log(this)
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
