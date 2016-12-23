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
    }
  }
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    background: #fafafa
</style>
