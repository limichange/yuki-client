<template lang="pug">
  .indexView
    feeds
      quickly-publish
</template>

<script>
  import feeds from '../components/feeds'
  import quicklyPublish from '../components/quicklyPublish'

  export default {
    name: 'indexView',
    components: {
      feeds,
      quicklyPublish
    }
  }
</script>

<style lang="sass" scoped>
  .indexView
    width: 100%
    padding-top: 20px
</style>
