<template lang="pug">
  .feeds
    slot
    feed(v-for="item in feed")
      .author
        img.avatar(:src="item.author.avatar")
        .nickname(v-text="item.author.nickname")
        .date(v-text="item.date")
      h2.title(v-text="item.title")
      p.content(v-text="item.content")
      i-button.like Like
</template>

<script>
  import { mapState } from 'vuex'
  import button from '../components/button'
  import feed from './feed'

  export default {
    name: 'feeds',
    components: {
      'iButton': button,
      feed
    },
    computed: mapState([
      'feed'
    ]),
    created () {
      this.$store.dispatch('feed/getData')
    }
  }
</script>

<style lang="sass" scoped>
  .feeds
    margin: 5px

  .avatar
    width: 32px
    height: 32px
    display: inline-block
    vertical-align: middle
    border-radius: 100%

  .nickname
    font-size: 12px
    color: #00ab6b
    text-decoration: none
</style>
