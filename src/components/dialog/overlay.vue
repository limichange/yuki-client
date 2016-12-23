<template lang="pug">
  .overlay(@click.self="handleWrapperClick", v-show="visible")
    slot
</template>

<script>
  export default {
    name: 'overlay',
    data () {
      return {
        visible: true
      }
    },
    methods: {
      handleWrapperClick () {
        this.visible = false
      }
    }
  }
</script>

<style lang="sass" scoped>
  .overlay
    width: 100%
    position: fixed
    overflow: auto
    top: 0
    left: 0
    bottom: 0
    right: 0
    justify-content: center
    align-items: center
    display: flex
    z-index: 900
    background-color: rgba(0, 0, 0, .6)
    width: 100%
    padding: 0
    margin: 0
    border: 0
</style>
