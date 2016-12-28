<template lang="pug">
  .quicklyPublish(v-if="me.isLogIn")
    img.avatar(:src="me.avatar")
    i-input.input(
      v-model="content",
      @keydown.enter="submit",
      placeholder="有什么新鲜事？")
    i-button(@click="submit") 发布
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
    data () {
      return {
        content: ''
      }
    },
    components: {
      'iButton': button,
      'iInput': input
    },
    methods: {
      submit (e) {
        const self = this
        const { dispatch, state } = self.$store
        const content = self.content

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

        self.content = ''
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

    .input
      margin-right: 10px
      margin-left: 10px

</style>
