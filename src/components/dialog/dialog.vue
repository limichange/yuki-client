<template lang="pug">
  overlay
    .dialogContent dialogContent
</template>

<script>
  import overlay from './overlay'

  export default {
    name: 'dialog',
    components: {
      overlay
    }
  }
</script>

<style lang="sass">
  .dialogContent
    outline: 0
    overflow: hidden
    max-width: 520px
    min-height: 200px
    min-width: 300px
    border-radius: 3px
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .44)
    background: white
</style>
