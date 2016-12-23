<template lang="pug">
  .siteNav
    ul
     li
       router-link(to="/") index
     li
       router-link(to="/me")
         img.avatar(:src="me.avatar")
         span(v-text="me.nickname")
     li 登录
     li 注册
</template>

<script>
  import { mapGetters } from 'vuex'
  import api from '../api'

  export default {
    name: 'siteNav',
    computed: mapGetters({
      me: 'me/me'
    }),
    created () {
      const { commit } = this.$store
      api.me.get().then(({ data }) => {
        commit('me/updateAvatar', data.avatar)
        commit('me/updateNickname', data.nickname)
        commit('me/updateUUID', data.uuid)
      })
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
