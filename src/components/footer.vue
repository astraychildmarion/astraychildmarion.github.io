<template lang="pug">
  .footer-wrap
    span © 2019 Marion Ma
    social-link
</template>
<script>
import socialLink from './social'

export default {
  name: 'myFooter',
  data () {
    return {
    }
  },
  components: {
    socialLink
  }
}
</script>
<style lang="scss">
.footer-wrap{
  .social-wrapper{
    float: right;
    padding: 0;
    margin: 0;
    a{
      vertical-align: text-bottom;
    }
  }
}
</style>
