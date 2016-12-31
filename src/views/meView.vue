<template lang="pug">
  .meView
    feedCard
      h1 个人信息
</template>

<script>
  import feedCard from '../components/feedCard'

  export default {
    name: 'meView',
    components: {
      feedCard
    }
  }
</script>

<style lang="sass">
  .meView
    padding-top: 20px
    width: 100%
</style>
