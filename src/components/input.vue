<template lang="pug">
  input.input(
    @input="handleInput",
    @keydown="handleKeydown")
</template>

<script>
  export default {
    name: 'input',
    methods: {
      handleKeydown (event) {
        const self = this
        self.$emit('keydown', event)
      },
      handleInput (event) {
        const self = this
        self.$emit('input', event)
      }
    }
  }
</script>

<style lang="sass">
  .input
    appearance: none
    background-color: #fff
    background-image: none
    border-radius: 4px
    border: 1px solid #c0ccda
    box-sizing: border-box
    color: #1f2d3d
    display: block
    font-size: inherit
    height: 36px
    line-height: 1
    outline: none
    padding: 3px 10px
    transition: border-color .2s cubic-bezier(.645,.045,.355,1)
    width: 100%

    &:hover
      border-color: #8492a6

    &:focus
      outline: none
      border-color: #20a0ff

    &::placeholder
      color: #99a9bf
</style>
