<template lang="pug">
  .indexView
    feeds
      feed.quicklyPublish(v-if="me.isLogIn")
        img.avatar(:src="me.avatar")
        textarea
        i-button 发布
</template>

<script>
  import feeds from '../components/feeds'
  import feed from '../components/feed'
  import button from '../components/button'
  import { mapState } from 'vuex'

  export default {
    name: 'indexView',
    components: {
      feed,
      feeds,
      'iButton': button
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

  .avatar
    width: 36px
    height: 36px
    border-radius: 100%
</style>
