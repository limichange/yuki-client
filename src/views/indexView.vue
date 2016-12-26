<template lang="pug">
  .indexView
    feeds
      feed.quicklyPublish
        textarea
        i-button 发布
</template>

<script>
  import feeds from '../components/feeds'
  import feed from '../components/feed'
  import button from '../components/button'

  export default {
    name: 'indexView',
    components: {
      feed,
      feeds,
      'iButton': button
    }
  }
</script>

<style lang="sass" scoped>
  .indexView
    width: 100%
    padding-top: 20px

  .quicklyPublish
    text-align: center

    textarea
</style>
