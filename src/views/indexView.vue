<template lang="pug">
  .indexView indexView
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'indexView',
    computed: mapGetters([
      'currentUser'
    ])
  }
</script>

<style lang="sass">
  .indexView
    width: 100%
</style>
