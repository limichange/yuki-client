<template lang="pug">
  .quicklyPublish(v-if="me.isLogIn")
    img.avatar(:src="me.avatar")
    i-input(
      @keydown.enter="submit",
      placeholder="有什么新鲜事？")
</template>

<script>
  import button from './button'
  import input from './input'
  import { mapState } from 'vuex'

  export default {
    name: 'quicklyPublish',
    computed: {
      ...mapState([
        'me'
      ])
    },
    components: {
      'iButton': button,
      'iInput': input
    },
    methods: {
      submit (e) {
        const self = this
        const { dispatch, state } = self.$store
        const content = e.target.value

        if (content.trim()) {
          dispatch('feeds/add', {
            title: '',
            content,
            author: state.me,
            uuid: '',
            type: 'microText',
            date: new Date().getTime()
          })
        }

        e.target.value = ''
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
