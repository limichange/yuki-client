<template lang="pug">
  .siteNav
    .contianer
      .item-list
         router-link(class="item", to="/index")
           span 首页
      .item-list.right
         router-link(class="item", to="/me")
           span(v-text="me.nickname", v-if="me.isLogIn")
         .item.logOut(@click="signOut", v-if="me.isLogIn") 登出
         .item(@click="showSignInDialog", v-if="!me.isLogIn") 登录
         .item(@click="showSingUpDialog", v-if="!me.isLogIn") 注册
         sign-in-dialog
</template>

<script>
  import { mapState } from 'vuex'
  import signInDialog from '../components/dialog/signInDialog'
  import signUpDialog from '../components/dialog/signUpDialog'

  export default {
    name: 'siteNav',
    components: {
      signInDialog,
      signUpDialog
    },
    computed: mapState([
      'me'
    ]),
    methods: {
      showSignInDialog () {
        this.$store.commit('signInDialog/open')
      },
      showSingUpDialog () {
        this.$store.commit('')
      },
      signOut () {
        this.$store.dispatch('me/signOut')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .siteNav
    width: 100%
    background-color: #fff
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25)
    padding: 25px 60px
    position: relative
    box-sizing: border-box

  .item-list
    height: 40px
    display: inline-block
    vertical-align: top
    line-height: 40px

    &.right
      float: right

  .item:hover, .router-link-active
    border-bottom: 3px solid #42b983

  .item
    cursor: pointer
    padding-bottom: 3px
    text-decoration: none
    color: #34495e
    line-height: 40px
    display: inline-block
    position: relative
    margin: 0 0.6em

    &.logOut:hover
      border-bottom: 3px solid #FF4949

  .contianer
    max-width: 1200px
    margin-left: auto
    margin-right: auto
    position: relative

  .avatar
    border-radius: 100%
    cursor: pointer
</style>
