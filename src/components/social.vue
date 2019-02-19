<template lang="pug">
  .social-wrapper()
    a(
    href="https://www.linkedin.com/in/marion-ma-326248100"
    title="Marion LinkedIn"
    target="_blank"
    @mouseover="insocial = true"
    @mouseout="insocial = false"
    :class="{socialhover: insocial}"
    )
      img(src="../assets/icons/instagram.png")
    a(
    href="https://www.linkedin.com/in/marion-ma-326248100"
    title="Marion LinkedIn"
    target="_blank"
    )
      img(src="../assets/icons/linkedin.png")
    a(
      href="mailto:allidareused@gmail.com"
      title="Contact Me!"
    )
      img(src="../assets/icons/gmail.png")
</template>
<script>
export default {
  name: 'socialLink',
  data: () => {
    return {
      insocial: false
    }
  }
}
</script>
<style lang="scss">
  .social-wrapper{
    margin-top: 20px;
    a{
      display: inline-block;
      margin: 0 10px 0 0;
      width: 30px;
      height: 30px;
      img{
        width: 100%;
        filter: grayscale(100%) brightness(100%);
      }
      &.socialhover {
        img {
          filter: grayscale(0%);
          transition: filter .5s;
        }
      }
    }
  }
</style>
