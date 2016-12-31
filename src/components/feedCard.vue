<template lang="pug">
  .feedCard
    slot
</template>

<script>
  export default {
    name: 'feedCard'
  }
</script>

<style lang="sass" scoped>
  .feedCard
    border-radius: 3px
    padding: 20px
    margin-right: auto
    margin-left: auto
    max-width: 660px
    margin-bottom: 10px
    background: #fff
    box-shadow: 0 1px 4px rgba(0,0,0,.04)
    border: 1px solid rgba(0,0,0,.09)
</style>
