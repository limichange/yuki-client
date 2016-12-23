<template lang="pug">
  .siteNav
    ul
     li
       router-link(to="/") index
     li
       router-link(to="/me") me
     li
       img.avatar(:src="currentUser.avatar")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'siteNav',
    computed: mapGetters([
      'currentUser'
    ])
  }
</script>

<style lang="sass" scoped>
  .avatar
    border-radius: 100%
    cursor: pointer
</style>
