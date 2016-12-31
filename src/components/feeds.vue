<template lang="pug">
  .feeds
    feedCard
      quickly-publish
    feedCard(v-for="item in feeds")
      .author
        img.avatar(:src="item.author.avatar")
        .nickname(v-text="item.author.nickname")
        .date {{ item.date | timeago }}
      h2.title(v-text="item.title", v-if="item.title")
      p.content(v-text="item.content", v-if="item.content")
      i-button.like Like
    feedCard
      h1 已经没有了
</template>

<script>
  import button from '../components/button'
  import quicklyPublish from '../components/quicklyPublish'
  import feedCard from './feedCard'

  import Timeago from 'timeago.js'
  const timeagoInstance = new Timeago()

  export default {
    name: 'feeds',
    components: {
      'iButton': button,
      feedCard,
      quicklyPublish
    },
    computed: {
      feeds () {
        return this.$store.state.feeds.sort((x, y) => x.date < y.date)
      }
    },
    filters: {
      timeago (val) {
        return timeagoInstance.format(val, 'zh_CN')
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
