<template lang="pug">
  .quicklyPublish(v-if="me.isLogIn")
    img.avatar(:src="me.avatar")
    i-input(
      :value="newFeed.content",
      @input="udpateContent",
      @keydown.enter="submit",
      placeholder="有什么新鲜事？")
</template>

<script>
  import button from './button'
  import input from './input'
  import { mapState } from 'vuex'

  export default {
    name: 'quicklyPublish',
    computed: mapState([
      'me',
      'newFeed'
    ]),
    components: {
      'iButton': button,
      'iInput': input
    },
    methods: {
      udpateContent (e) {
        this.$store.commit('newFeed/updateContent', e.target.value)
      },
      submit () {
        const self = this
        const $store = self.$store

        $store.commit('newFeed/updateType', 'microText')
        $store.commit('newFeed/updateAuthor', $store.state.me)
        $store.commit('newFeed/updateDate', new Date().getTime())
        $store.dispatch('feeds/add', $store.state.newFeed)
      }
    }
  }
</script>

<style lang="sass">
  .quicklyPublish
    text-align: center
    display: flex

    .avatar
      width: 36px
      height: 36px
      border-radius: 100%
      margin-right: 10px
</style>
