<template lang="pug">
  .signUpDialog signUpDialog
</template>

<script>
  import dialog from './dialog'
  import api from '../../api'

  export default {
    name: 'signUpDialog',
    data () {
      return {
        username: '',
        email: '',
        password: '',
        visible: true
      }
    },
    components: {
      'yukiDialog': dialog
    },
    methods: {
      submit: api
    }
  }
</script>

<style lang="sass">
  .signUpDialog
    width: 100%
</style>
