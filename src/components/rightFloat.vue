<template lang="pug">
  .socialWarp(@mouseover="insocial = true" @mouseout="insocial = false" :class="{socialhover: insocial}")
    .circle
      a(href="#", title="@astraychildalisha")
        img(src="../assets/instagram.png")
    .circle
      a(href="#", title="title")
        img(src="../assets/linkedin.png")
    .circle
      a(href="#", title="title")
        img(src="../assets/gmail.png")
</template>
<script>
export default {
  name: 'socialFloat',
  data: function () {
    return {
      insocial: false
    }
  }
}
</script>
<style lang="scss">
.socialWarp {
  position: absolute;
  right: 0;
  &.socialhover {
    img {
      filter: grayscale(80%);
      transition: filter .5s;
    }
  }
  .circle {
    background-color: #1f1f1f;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0;
    a {
      width: 100%;
      height: 100%;
      display: block;
      padding-top: 10px;
    }
    img {
      width: 30px;
      margin: 0 auto;
      display: block;
    }
    &:hover{
      img{
        filter: grayscale(0%);
      }
    }
  }
}
</style>
