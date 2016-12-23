<template lang="pug">
  .indexView
    h1 indexView
    signInDialog
</template>

<script>
  import { mapGetters } from 'vuex'
  import { signInDialog } from '../components'

  export default {
    name: 'indexView',
    components: {
      'signInDialog': signInDialog
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
