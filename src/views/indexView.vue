<template lang="pug">
  .indexView
    .quicklyPublish
      input
      i-button 发布
    feeds
</template>

<script>
  import feeds from '../components/feeds'
  import button from '../components/button'

  export default {
    name: 'indexView',
    components: {
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
</style>
