<template lang="pug">
  .indexView
    h1 indexView
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'indexView',
    computed: mapGetters({
      me: 'me/me'
    })
  }
</script>

<style lang="sass">
  .indexView
    width: 100%
</style>
