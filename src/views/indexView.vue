<template lang="pug">
  .indexView
    feeds
</template>

<script>
  import feeds from '../components/feeds'

  export default {
    name: 'indexView',
    components: {
      feeds
    }
  }
</script>

<style lang="sass" scoped>
  .indexView
    width: 100%
    padding-top: 20px
</style>
