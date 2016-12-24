<template lang="pug">
  .overlay(@click.self="close", v-show="visible")
    button.closeBtn(@click.self="close") ×
    .dialogContent
      slot
</template>

<script>
  export default {
    name: 'dialog',
    props: ['value'],
    data () {
      return {
        visible: true
      }
    },
    watch: {
      value (val) {
        this.visible = val
      },
      visible (val) {
        const self = this

        self.$emit('input', val)

        if (val) {
          self.$emit('open')
        } else {
          self.$emit('close')
        }
      }
    },
    methods: {
      close () {
        this.visible = false
      }
    }
  }
</script>

<style lang="sass" scoped>
  .closeBtn
    font-size: 32px
    letter-spacing: 0
    font-weight: 300
    font-style: normal
    padding: 10px 20px
    position: absolute
    top: 0
    right: 0
    background: rgba(0, 0, 0, 0)
    border: none
    color: #fff
    cursor: pointer

  .dialogContent
    outline: 0
    overflow: hidden
    max-width: 520px
    min-height: 200px
    min-width: 300px
    border-radius: 3px
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .44)
    background: white

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
</style>
