<template lang="pug">
  .siteNav
    ul
     li
       router-link(to="/") index
     li
       router-link(to="/me")
         img.avatar(:src="me.avatar")
         span(v-text="me.nickname")
     li
       button(@click="showSignInDialog") 登录
     li
       button 注册
     sign-in-dialog
</template>

<script>
  import { mapGetters } from 'vuex'
  import signInDialog from '../components/dialog/signInDialog'
  import signUpDialog from '../components/dialog/signUpDialog'

  export default {
    name: 'siteNav',
    components: {
      signInDialog,
      signUpDialog
    },
    computed: mapGetters({
      me: 'me/me'
    }),
    methods: {
      showSignInDialog () {
        this.$store.commit('signInDialog/open')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .siteNav
    width: 100%
    font-size: 14px
    background: #fff
    color: rgba(0,0,0,.44)

  ul, li
    list-style: none
    list-style-image: none
    display: inline-block
    padding: 0
    margin: 0

  .avatar
    border-radius: 100%
    cursor: pointer
</style>
