<template lang="pug">
  .meView
    feed
      h1 个人信息
</template>

<script>
  import feed from '../components/feed'

  export default {
    name: 'meView',
    components: {
      feed
    }
  }
</script>

<style lang="sass">
  .meView
    padding-top: 20px
    width: 100%
</style>
