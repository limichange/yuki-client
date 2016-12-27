<template lang="pug">
  .indexView
    feeds
      feed.quicklyPublish(v-if="me.isLogIn")
        img.avatar(:src="me.avatar")
        i-input(placeholder="有什么新鲜事？")
</template>

<script>
  import feeds from '../components/feeds'
  import feed from '../components/feed'
  import button from '../components/button'
  import input from '../components/input'
  import { mapState } from 'vuex'

  export default {
    name: 'indexView',
    components: {
      feed,
      feeds,
      'iButton': button,
      'iInput': input
    },
    computed: mapState([
      'me'
    ])
  }
</script>

<style lang="sass" scoped>
  .indexView
    width: 100%
    padding-top: 20px

  .quicklyPublish
    text-align: center
    display: flex

    .avatar
      margin-right: 10px

  .avatar
    width: 36px
    height: 36px
    border-radius: 100%
</style>
