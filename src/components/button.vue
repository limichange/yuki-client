<template lang="pug">
  .button(@click="handleClick")
    slot
</template>

<script>
  export default {
    name: 'button',
    methods: {
      handleClick (event) {
        const self = this
        self.$emit('click', event)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .button
    display: inline-block
    line-height: 1
    white-space: nowrap
    cursor: pointer
    background: #fff
    border: 1px solid #c0ccda
    color: #1f2d3d
    -webkit-appearance: none
    text-align: center
    box-sizing: border-box
    outline: none
    margin: 0
    -moz-user-select: none
    -webkit-user-select: none
    -ms-user-select: none
    padding: 10px 15px
    font-size: 14px
    border-radius: 4px

  .button + .button
    margin-left: 10px

  .button:focus, .button:hover
    color: #20a0ff
    border-color: #20a0ff

  .button:active
    color: #1d90e6
    border-color: #1d90e6
    outline: none

  .button::-moz-focus-inner
    border: 0

</style>
