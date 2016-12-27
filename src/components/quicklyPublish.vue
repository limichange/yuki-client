<template lang="pug">
  feed.quicklyPublish(v-if="me.isLogIn")
    img.avatar(:src="me.avatar")
    i-input(
      @keydown.enter="submit",
      placeholder="有什么新鲜事？")
</template>

<script>
  import button from './button'
  import input from './input'
  import feed from './feed'
  import { mapState } from 'vuex'

  export default {
    name: 'quicklyPublish',
    computed: mapState([
      'me'
    ]),
    components: {
      feed,
      'iButton': button,
      'iInput': input
    },
    methods: {
      submit () {
        console.log('submit')
      }
    }
  }
</script>

<style lang="sass">
  .quicklyPublish
    text-align: center
    display: flex

    .avatar
      width: 36px
      height: 36px
      border-radius: 100%
      margin-right: 10px
</style>
