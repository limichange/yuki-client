<template lang="pug">
  i-dialog
    .signInDialog
      .item
        label 账号：
          input
      .item
        label 密码：
          input
      button 登录
</template>

<script>
  import dialog from './dialog'

  export default {
    name: 'signInDialog',
    components: {
      'iDialog': dialog
    }
  }
</script>

<style lang="sass" scoped>
  .signInDialog
    text-align: center
    padding: 50px
  .item
    margin: 10px
</style>
