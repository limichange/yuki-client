<template lang="pug">
  #app
    site-nav
    router-view
</template>

<script>
  import siteNav from './components/siteNav'

  export default {
    name: 'app',
    components: {
      siteNav
    },
    created () {
      this.$store.dispatch('me/getData')
    }
  }
</script>

<style lang="sass">
  body
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    background: #fafafa
</style>
