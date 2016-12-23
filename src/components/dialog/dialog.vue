<template lang="pug">
  .dialogWrapper
    overlay(@click="handleWrapperClick")
      .dialogContent dialogContent
</template>

<script>
  import overlay from './overlay'

  export default {
    name: 'dialog',
    components: {
      overlay
    },
    data () {
      return {
        display: true
      }
    },
    methods: {
      handleWrapperClick () {
        console.log('handleWrapperClick')
      }
    }
  }
</script>

<style lang="sass">
  .dialogContent
    display: inline-block
    outline: 0
    overflow: hidden
    max-width: 520px
    vertical-align: middle
    border-radius: 3px
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .44)
    height: 200px
    margin: 0 auto
    background: white
</style>
