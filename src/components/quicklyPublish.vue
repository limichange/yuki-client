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
        const self = this
        self.$store.dispatch('feeds/add', {
          title: '开发者更熟悉的模板与特性',
          content: 'Vue 使用的是 web 开发者更熟悉的模板与特性，React 的特色在于函数式编程的理念和丰富的技术选型。Vue 比起 React 更容易被前端工程师接受，这是一个直观的感受；React 则更容易吸引在 FP 上持续走下去的开发者。我想更多还是口味的不同。',
          author: self.me,
          uuid: '23293jhhuuuauuewewe',
          type: 'text',
          date: new Date().getTime()
        })
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
