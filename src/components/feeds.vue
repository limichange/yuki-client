<template lang="pug">
  .feeds
    slot
    feed(v-for="item in feeds")
      .author
        img.avatar(:src="item.author.avatar")
        .nickname(v-text="item.author.nickname")
        .date {{ item.date | timeago }}
      h2.title(v-text="item.title")
      p.content(v-text="item.content")
      i-button.like Like
</template>

<script>
  import { mapState } from 'vuex'
  import button from '../components/button'
  import feed from './feed'

  import Timeago from 'timeago.js'
  const timeagoInstance = new Timeago()

  export default {
    name: 'feeds',
    components: {
      'iButton': button,
      feed
    },
    computed: mapState([
      'feeds'
    ]),
    filters: {
      timeago (val) {
        return timeagoInstance.format(val)
      }
    },
    created () {
      this.$store.dispatch('feeds/getData')
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
