<template lang="pug">
  .overlay
    slot
</template>

<script>
  export default {
    name: 'overlay'
  }
</script>

<style lang="sass" scoped>
  .overlay
    width: 100%
    position: fixed
    overflow: auto
    text-align: center
    top: 0
    left: 0
    bottom: 0
    right: 0
    display: block
    z-index: 900
    background-color: rgba(0, 0, 0, .6)
    width: 100%
    padding: 0
    margin: 0
    border: 0
</style>
