<template lang="pug">
  .indexView
    h1 indexView
    y-dialog
</template>

<script>
  import { mapGetters } from 'vuex'
  import { dialog } from '../components'

  export default {
    name: 'indexView',
    components: {
      'yDialog': dialog
    },
    computed: mapGetters({
      me: 'me/me'
    })
  }
</script>

<style lang="sass">
  .indexView
    width: 100%
</style>
